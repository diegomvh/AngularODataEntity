import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.complex';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { Flight } from './flight.entity';
import { Trip } from './trip.entity';
import { LocationModel } from './location.model';
import { PhotoModel } from './photo.model';
import { PersonModel } from './person.model';
import { AirlineModel } from './airline.model';
import { AirportModel } from './airport.model';
import { FlightModel } from './flight.model';
import { TripModel } from './trip.model';
import { LocationCollection } from './location.collection';
import { PhotoCollection } from './photo.collection';
import { PersonCollection } from './person.collection';
import { AirlineCollection } from './airline.collection';
import { AirportCollection } from './airport.collection';
import { FlightCollection } from './flight.collection';
import { TripCollection } from './trip.collection';
//#endregion

@Injectable()
export class PeopleService extends ODataEntitySetService<Person> {
  constructor(protected client: ODataClient) {
    super(client, 'People', 'Microsoft.OData.SampleService.Models.TripPin.Person');
  }

  //#region ODataApi Model
  personModel(attrs?: Partial<Person>): PersonModel<Person> {
    return this.entity().asModel(attrs || {}) as PersonModel<Person>;
  }
  //#endregion
  //#region ODataApi Collection
  personCollection(models?: Partial<Person>[]): PersonCollection<Person, PersonModel<Person>> {
    return this.entities().asCollection(models || []) as PersonCollection<Person, PersonModel<Person>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public friends(entity: EntityKey<Person>): ODataNavigationPropertyResource<Person> {
    return this.entity(entity).navigationProperty<Person>('Friends');
  }
  public airline(entity: EntityKey<Person>): ODataNavigationPropertyResource<Airline> {
    return this.entity(entity).navigationProperty<Airline>('Microsoft.OData.SampleService.Models.TripPin.Flight/Airline');
  }
  public from(entity: EntityKey<Person>): ODataNavigationPropertyResource<Airport> {
    return this.entity(entity).navigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/From');
  }
  public to(entity: EntityKey<Person>): ODataNavigationPropertyResource<Airport> {
    return this.entity(entity).navigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/To');
  }
  public photo(entity: EntityKey<Person>): ODataNavigationPropertyResource<Photo> {
    return this.entity(entity).navigationProperty<Photo>('Photo');
  }
  public photos(entity: EntityKey<Person>): ODataNavigationPropertyResource<Photo> {
    return this.entity(entity).navigationProperty<Photo>('Microsoft.OData.SampleService.Models.TripPin.Trip/Photos');
  }
  //#endregion
}
