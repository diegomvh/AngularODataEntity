import { Component } from '@angular/core';
import { ODataClient } from 'angular-odata';
import { AirportsService, AirlinesService, PeopleService, PhotosService, Airport, Person, PersonGender } from './trippin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TripPinEntity';
  constructor(
    private odata: ODataClient,
    private photos: PhotosService,
    private people: PeopleService,
    private airlines: AirlinesService,
    private airports: AirportsService
  ) {
    //this.queries();
    this.fetchPeople();
    this.createPerson();
  }

  queries() {
    let airports = this.odata.entitySet<Airport>("Airports");

    // Fetch set
    airports.get().subscribe(console.log);

    // Fetch with count
    airports.get({withCount: true}).subscribe(console.log);

    // Fetch by key
    let airport = airports.entity("CYYZ");
    airport.get().subscribe(console.log);

    // Filter
    airports.filter({Location: {City: {CountryRegion: "United States"}}});
    airports.get().subscribe(console.log);

    // Add filter
    airports.filter().push({Location: {City: {Region: "California"}}});
    airports.get().subscribe(console.log);

    // Remove filter
    airports.filter().clear();

    let people = this.odata.entitySet<Person>("People");

    // Expand
    people.expand({Friends: {}, Trips: {expand: {PlanItems: {}, Photos: {}}}});
    people.get({withCount: true}).subscribe(console.log);
  }

  fetchPeople() {
    // Fetch all
    this.people.entities().collection().toPromise()
      .then(col => {
        // Change collection size
        return col.size(4).toPromise();
      })
      .then(col => {
        console.log([...col.entities]);
        console.log(col);
        return col.nextPage().toPromise();
      })
      .then(col => {
        console.log([...col.entities]);
        console.log(col);
        return col.nextPage().toPromise();
      })
      .then(col => {
        console.log([...col.entities]);
        console.log(col);
        return col.nextPage().toPromise();
      });
  }

  createPerson() {
    // Create Person 
    this.people.create({
      Concurrency: 0,
      Emails: ['some@email.com'], 
      UserName: 'diegomvh', 
      Gender: PersonGender.Male, 
      FirstName: 'Diego',
      LastName: 'van Haaster',
      AddressInfo: []
    }).subscribe(p => {
      console.log(p);
      this.people.destroy(p).subscribe();
    });
  }
}
