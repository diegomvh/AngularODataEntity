import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient } from 'angular-odata';
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
    this.api.resetDataSource().subscribe(() => {
      this.queries();
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
    let airportsService = this.factory.createEntityService<Airport>("Airports", 'Microsoft.OData.SampleService.Models.TripPin.Airport');
    let peopleService = this.factory.createEntityService<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');

    let airports = airportsService.entities();

    console.log(airportsService.entities());

    // Fetch all airports
    airports
    .all()
    .subscribe(aports => console.log("All: ", aports));

    // Fetch airports with count
    airports
    .get({withCount: true})
    .subscribe(([aports, annots]) => console.log("Airports: ", aports, "Annotations: ", annots));

    // Fetch airport with key
    airports
    .entity("CYYZ").get()
    .subscribe(([aport, annots]) => console.log("Airport: ", aport, "Annotations: ", annots));

    // Filter airports (inmutable resource)
    airports
    .filter({Location: {City: {CountryRegion: "United States"}}})
    .get()
    .subscribe(([aports, annots]) => console.log("Airports of United States: ", aports, "Annotations: ", annots));

    // Add filter (mutable resource)
    airports.query.filter().push({Location: {City: {Region: "California"}}});
    airports
    .get()
    .subscribe(([aports, annots]) => console.log("Airports in California: ", aports, "Annotations: ", annots));

    console.log(airports.toJSON());
    console.log(this.odata.fromJSON(airports.toJSON()));

    // Remove filter (mutable resource)
    airports.query.filter().clear();
    airports
    .get()
    .subscribe(([aports, annots]) => console.log("Airports: ", aports, "Annotations: ", annots));

    let people = peopleService.entities();

    // Expand (inmutable resource)
    people.expand({
      Friends: { 
        expand: { Friends: { select: ['AddressInfo']}} 
      }, 
      Trips: { select: ['Name', 'Tags'] },
    })
    .get({withCount: true})
    .subscribe(([peop, annots]) => console.log("People with Friends and Trips: ", peop, "Annotations: ", annots));

    console.log(people.toJSON());
    console.log(this.odata.fromJSON(people.toJSON()));
  }

  navigation() {
    // Create service without Type for Person entity
    let peopleService = this.factory.createEntityService<Person>("People");
    let person = peopleService.entity("scottketchum");

    let friends = person.navigationProperty<Person>("Friends");
    // Use TripPin config
    friends.get({responseType: 'entities', config: 'TripPin'}).subscribe(console.log);
  }

  property() {
    // Create Service with Type
    let peopleService = this.factory.createEntityService<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');
    let person = peopleService.entity("scottketchum");
    console.log(person);

    // Person locations
    let locations = person.property<Location[]>("AddressInfo");
    locations.get({responseType: 'entities'}).subscribe(console.log);

    // Person gender
    let gender = person.property<PersonGender>("Gender");
    gender.get({responseType: 'property'}).subscribe(console.log);
    gender.value().get().subscribe(console.log);

    // Person name
    let name = person.property<string>("UserName");
    name.get({responseType: 'property'}).subscribe(console.log);
    name.value().get().subscribe(console.log);

    // Person photo
    let photo = person.property<Photo>("Photo");
    photo.get({responseType: 'entity'}).subscribe(console.log);
    photo.value().arraybuffer().subscribe(console.log);
    photo.value().blob().subscribe(console.log);
    let photoName = photo.property<string>("Name");
    photoName.get({responseType: 'property'}).subscribe(console.log);

    name.value().get().subscribe(console.log);
  }

  mutate() {
    this.createPerson();
  }

  createPerson() {
    // Use Person Service
    this.people.create({
      Emails: ['some@email.com'], 
      UserName: 'diegomvh', 
      Gender: PersonGender.Male, 
      FirstName: 'Diego',
      LastName: 'van Haaster'
    }).pipe(
      switchMap(([person, entity]) => {
        return this.people.assign({UserName: person.UserName, Gender: PersonGender.Female}, {etag: entity.etag});
      })
    ).toPromise();
  }

  batch() {
    let batch = this.odata.batch();
  }
}
