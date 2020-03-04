import { Component } from '@angular/core';
import { ODataServiceFactory, ODataClient } from 'angular-odata';
import { PeopleService, Airport, Person, PersonGender, TripPinService } from './trippin';
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
      this.createPerson().toPromise();
      this.queries();
    });
  }

  queries() {
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

  createPerson() {
    // Use Person Service
    return this.people.create({
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
    );
  }
}
