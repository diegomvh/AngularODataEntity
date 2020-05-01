import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient } from 'angular-odata';
import { PeopleService, Airport, Person, PersonGender, TripPinService, Photo } from './trippin';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private factory: ODataServiceFactory,
    private api: TripPinService,
    private people: PeopleService
  ) {
    // Reset api
    this.api.resetDataSource().subscribe(() => {
      this.queries();
      //this.mutate();
    });
  }

  queries() {
    this.entities();
    this.navigation();
    this.property();
  }

  entities() {
    // Use OData Service Factory
    let airportsService = this.factory.create<Airport>("Airports");
    let peopleService = this.factory.create<Person>("People");

    let airports = airportsService.entities();

    console.log(airportsService.entities());
    // Fetch set
    airports.all()
      .subscribe(aports => console.log("All: ", aports));

    // Fetch with count
    airports.get({withCount: true})
      .subscribe(([aports, annots]) => console.log("Airports: ", aports, "Annotations: ", annots));

    // Fetch by key
    let airport = airports.entity("CYYZ");
    airport.get()
      .subscribe(([aport, annots]) => console.log("Airport: ", aport, "Annotations: ", annots));

    console.log(airport.toJSON());
    console.log(this.odata.fromJSON(airport.toJSON()));
    // Filter
    airports.filter({Location: {City: {CountryRegion: "United States"}}});
    airports.get()
      .subscribe(([aports, annots]) => console.log("Airports of United States: ", aports, "Annotations: ", annots));

    // Add filter
    airports.filter().push({Location: {City: {Region: "California"}}});
    airports.get()
      .subscribe(([aports, annots]) => console.log("Airports in California: ", aports, "Annotations: ", annots));

    console.log(airports.toJSON());
    console.log(this.odata.fromJSON(airports.toJSON()));
    // Remove filter
    airports.filter().clear();
    airports.get()
      .subscribe(([aports, annots]) => console.log("Airports: ", aports, "Annotations: ", annots));

    let people = peopleService.entities();

    // Expand
    people.expand({
      Friends: { 
        expand: { Friends: { select: ['AddressInfo']}} 
      }, 
      Trips: { select: ['Name', 'Tags'] },
    });
    people.get({withCount: true})
      .subscribe(([peop, annots]) => console.log("People with Friends and Trips: ", peop, "Annotations: ", annots));

    console.log(people.toJSON());
    console.log(this.odata.fromJSON(people.toJSON()));
    // Remove Expand
    people.expand().clear();
  }

  navigation() {
    let peopleService = this.factory.create<Person>("People");
    let person = peopleService.entity("scottketchum");

    let friends = person.navigationProperty<Person>("Friends");
    friends.get({responseType: 'entities'}).subscribe(console.log);
  }

  property() {
    // Create Service with Metadata Type
    let peopleService = this.factory.create<Person>("People", 'Microsoft.OData.SampleService.Models.TripPin.Person');
    let person = peopleService.entity("scottketchum");
    person.get().subscribe(console.log);

    // Person locations
    let locations = person.property<Location[]>("AddressInfo");
    locations.get({responseType: 'entities'}).subscribe(console.log);

    // Person gender
    let gender = person.property<PersonGender>("Gender");
    gender.get({responseType: 'value'}).subscribe(console.log);
    gender.value().get().subscribe(console.log);

    // Person name
    let name = person.property<string>("UserName");
    name.get({responseType: 'value'}).subscribe(console.log);
    name.value().get().subscribe(console.log);

    // Person photo
    let photo = person.property<Photo>("Photo");
    photo.get({responseType: 'entity'}).subscribe(console.log);
    photo.value().arraybuffer().subscribe(console.log);
    photo.value().blob().subscribe(console.log);
    let photoName = photo.property<string>("Name");
    photoName.get({responseType: 'value'}).subscribe(console.log);

    name.value().get().subscribe(console.log);
  }

  mutate() {
    this.createPerson();
  }

  createPerson() {
    // Use Person Service
    this.people.create({
      Concurrency: 0,
      Emails: ['some@email.com'], 
      UserName: 'diegomvh', 
      Gender: PersonGender.Male, 
      FirstName: 'Diego',
      LastName: 'van Haaster',
      AddressInfo: []
    }).pipe(
      switchMap(([person, entity]) => {
        return this.people.assign({UserName: person.UserName, Gender: PersonGender.Female}, entity.etag);
      })
    ).toPromise();
  }
}
