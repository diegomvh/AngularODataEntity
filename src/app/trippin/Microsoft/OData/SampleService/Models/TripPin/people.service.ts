import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { Flight } from './flight.entity';
import { Trip } from './trip.entity';
//#endregion

@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static path: string = 'People';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.People';
  static entityType: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';

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
