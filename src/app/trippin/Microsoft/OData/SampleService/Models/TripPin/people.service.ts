import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, HttpOptions } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';


@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static path: string = 'People';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.People';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';

  // Actions
  
  // Functions
  
  // Navigations
  public friends(entity: Person, options?: HttpOptions): Observable<[Person[], ODataEntitiesAnnotations]> {
    return this.navigationProperty<Person>(entity, 'Friends')
      .collection(options);
  }
  public addPersonToFriends<Person>(entity: Person, target: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.navigationProperty<Person>(entity, 'Friends').reference()
      .add(target);
  }
  public removePersonFromFriends<Person>(entity: Person, target?: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.navigationProperty<Person>(entity, 'Friends').reference()
      .remove({etag, target});
  }
  public airline(entity: Person, options?: HttpOptions): Observable<[Airline, ODataEntityAnnotations]> {
    return this.navigationProperty<Airline>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline')
      .single(options);
  }
  public setAirlineAsAirline<Airline>(entity: Person, target: ODataEntityResource<Airline>, etag?: string): Observable<any> {
    return this.navigationProperty<Airline>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline').reference()
      .set(target, {etag});
  }
  public unsetAirlineAsAirline<Airline>(entity: Person, target?: ODataEntityResource<Airline>, etag?: string): Observable<any> {
    return this.navigationProperty<Airline>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline').reference()
      .remove({etag, target});
  }
  public from(entity: Person, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From')
      .single(options);
  }
  public setAirportAsFrom<Airport>(entity: Person, target: ODataEntityResource<Airport>, etag?: string): Observable<any> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From').reference()
      .set(target, {etag});
  }
  public unsetAirportAsFrom<Airport>(entity: Person, target?: ODataEntityResource<Airport>, etag?: string): Observable<any> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From').reference()
      .remove({etag, target});
  }
  public to(entity: Person, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To')
      .single(options);
  }
  public setAirportAsTo<Airport>(entity: Person, target: ODataEntityResource<Airport>, etag?: string): Observable<any> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To').reference()
      .set(target, {etag});
  }
  public unsetAirportAsTo<Airport>(entity: Person, target?: ODataEntityResource<Airport>, etag?: string): Observable<any> {
    return this.navigationProperty<Airport>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To').reference()
      .remove({etag, target});
  }
  public photo(entity: Person, options?: HttpOptions): Observable<[Photo, ODataEntityAnnotations]> {
    return this.navigationProperty<Photo>(entity, 'Photo')
      .single(options);
  }
  public setPhotoAsPhoto<Photo>(entity: Person, target: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.navigationProperty<Photo>(entity, 'Photo').reference()
      .set(target, {etag});
  }
  public unsetPhotoAsPhoto<Photo>(entity: Person, target?: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.navigationProperty<Photo>(entity, 'Photo').reference()
      .remove({etag, target});
  }
  public photos(entity: Person, options?: HttpOptions): Observable<[Photo[], ODataEntitiesAnnotations]> {
    return this.navigationProperty<Photo>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos')
      .collection(options);
  }
  public addPhotoToPhotos<Photo>(entity: Person, target: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.navigationProperty<Photo>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos').reference()
      .add(target);
  }
  public removePhotoFromPhotos<Photo>(entity: Person, target?: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.navigationProperty<Photo>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos').reference()
      .remove({etag, target});
  }
  
}
