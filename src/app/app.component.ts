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
    //this.useODataClient();
    this.useEntityService();
  }

  useODataClient() {
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

  useEntityService() {
    // Fetch all
    this.people.fetchAll().subscribe(console.log);
    this.people.create({
      Concurrency: 0,
      FirstName: "Diego", 
      Emails: ["diego@vanhaaster.com"], 
      Gender: PersonGender[PersonGender.Male], 
      LastName: "van Haaster", 
      AddressInfo: [],
      UserName: "diegomvh"
    }).subscribe(console.log);
    this.people.fetchPage({withCount: true}).subscribe(console.log);
  }
}
