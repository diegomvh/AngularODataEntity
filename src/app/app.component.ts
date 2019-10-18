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
    this.photos.fetchCollection(40).toPromise()
      .then(col => {
        return col.size(10).toPromise();
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
      })

  }
}
