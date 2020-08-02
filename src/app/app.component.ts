import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient, odataEtag } from 'angular-odata';
import { PeopleService, Airport, Person, PersonGender, Photo } from './trippin';
import { switchMap } from 'rxjs/operators';
import { DefaultContainerService } from './trippin/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private factory: ODataServiceFactory,
    private api: DefaultContainerService,
    private people: PeopleService
  ) {
    // Reset api
    this.api.resetDataSource().call(null).subscribe(() => {
      //this.queries();
      this.mutate();
    });
  }

  queries() {
    this.entities();
    this.navigation();
    this.property();
    this.batch();
  }

  entities() {
    // Use OData Service Factory
    let airportsService = this.factory.create<Airport>("Airports", 'Microsoft.OData.SampleService.Models.TripPin.Airport');
    let peopleService = this.factory.create<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');

    let airports = airportsService.entities();

    console.log(airportsService.entities());

    // Fetch all airports
    airports
    .all()
    .subscribe(aports => console.log("All: ", aports));

    // Fetch airports with count
    airports
    .get({withCount: true})
    .subscribe(({entities, annotations}) => console.log("Airports: ", entities, "Annotations: ", annotations));

    // Fetch airport with key
    airports
    .entity("CYYZ").get()
    .subscribe(({entity, annotations}) => console.log("Airport: ", entity, "Annotations: ", annotations));

    // Filter airports (inmutable resource)
    airports
    .filter({Location: {City: {CountryRegion: "United States"}}})
    .get()
    .subscribe(({entities, annotations}) => console.log("Airports of United States: ", entities, "Annotations: ", annotations));

    // Add filter (mutable resource)
    airports.query.filter().push({Location: {City: {Region: "California"}}});
    airports
    .get()
    .subscribe(({entities, annotations}) => console.log("Airports in California: ", entities, "Annotations: ", annotations));

    console.log(airports.toJSON());
    console.log(this.odata.fromJSON(airports.toJSON()));

    // Remove filter (mutable resource)
    airports.query.filter().clear();
    airports
    .get()
    .subscribe(({entities, annotations}) => console.log("Airports: ", entities, "Annotations: ", annotations));

    let people = peopleService.entities();

    // Expand (inmutable resource)
    people.expand({
      Friends: { 
        expand: { Friends: { select: ['AddressInfo']}} 
      }, 
      Trips: { select: ['Name', 'Tags'] },
    })
    .get({withCount: true})
    .subscribe(({entities, annotations}) => console.log("People with Friends and Trips: ", entities, "Annotations: ", annotations));

    console.log(people.toJSON());
    console.log(this.odata.fromJSON(people.toJSON()));
  }

  navigation() {
    // Create service without Type for Person entity
    let peopleService = this.factory.create<Person>("People");
    let person = peopleService.entity("scottketchum");
    person.get({config: 'TripPin'}).subscribe(({entity, annotations}) => console.log(annotations.property('Emails')));

    let friends = person.navigationProperty<Person>("Friends");
    // Use TripPin config
    friends.get({responseType: 'entities', config: 'TripPin'}).subscribe(console.log);
  }

  property() {
    // Create Service with Type
    let peopleService = this.factory.create<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');
    let person = peopleService.entity("scottketchum");
    person.property<string[]>("Emails").fetch().subscribe(console.log)
    person.property<Person[]>("Friends").fetch().subscribe(console.log)

    // Person locations
    let locations = person.property<Location[]>("AddressInfo");
    locations.fetch().subscribe(console.log);

    // Person gender
    let gender = person.property<PersonGender>("Gender");
    gender.fetch().subscribe(console.log);
    gender.value().get().subscribe(console.log);

    // Person name
    let name = person.property<string>("UserName");
    name.fetch().subscribe(console.log);
    name.value().get().subscribe(console.log);

    // Person photo
    let photo = person.navigationProperty<Photo>("Photo");
    photo.fetch().subscribe(console.log);
    photo.value().arraybuffer().subscribe(console.log);
    photo.value().blob().subscribe(console.log);
    let photoName = photo.property<string>("Name");
    photoName.fetch().subscribe(console.log);

    name.value().get().subscribe(console.log);
  }

  mutate() {
    this.createPerson();
  }

  createPerson() {
    // Use Person Service
    this.people.entities().add({
      Emails: ['some@email.com'], 
      UserName: 'diegomvh', 
      Gender: PersonGender.Male, 
      FirstName: 'Diego',
      LastName: 'van Haaster'
    }).pipe(
      switchMap((person) => {
        return this.people.entity(person).assign({UserName: person.UserName, Gender: PersonGender.Female}, {etag: odataEtag(person)});
      })
    ).toPromise();
  }

  batch() {
    let batch = this.odata.batch();
  }
}
