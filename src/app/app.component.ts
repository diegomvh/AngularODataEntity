import { Component } from '@angular/core';
import { ODataClient, ODATA_ETAG } from 'angular-odata';
import { AirportsService, AirlinesService, PeopleService, PhotosService, Airport, Person, PersonGender, TripPinService } from './trippin';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private odata: ODataClient,
    private api: TripPinService,
    private photos: PhotosService,
    private people: PeopleService,
    private airlines: AirlinesService,
    private airports: AirportsService
  ) {
    this.api.resetDataSource().toPromise();
    this.createPerson().toPromise();
    //this.queries();
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

  createPerson() {
    // Create Person 
    return this.people.create({
      Concurrency: 0,
      Emails: ['some@email.com'], 
      UserName: 'diegomvh', 
      Gender: PersonGender.Male, 
      FirstName: 'Diego',
      LastName: 'van Haaster',
      AddressInfo: []
    }).pipe(
      switchMap(res => {
        let person = res.value;
        return this.people.assign({UserName: person.UserName, Gender: PersonGender.Female}, res.etag);
      })
    );
  }
}
