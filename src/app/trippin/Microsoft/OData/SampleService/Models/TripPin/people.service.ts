import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static path: string = 'People';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.People';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public friends(entity: Person): ODataNavigationPropertyResource<Person> {
    return this.navigationProperty<Person>(entity, 'Friends');
  }
  public airline(entity: Person): ODataNavigationPropertyResource<Airline> {
    return this.navigationProperty<Airline>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline');
  }
  public from(entity: Person): ODataNavigationPropertyResource<Airport> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From');
  }
  public to(entity: Person): ODataNavigationPropertyResource<Airport> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To');
  }
  public photo(entity: Person): ODataNavigationPropertyResource<Photo> {
    return this.navigationProperty<Photo>(entity, 'Photo');
  }
  public photos(entity: Person): ODataNavigationPropertyResource<Photo> {
    return this.navigationProperty<Photo>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos');
  }
  //#endregion
}
