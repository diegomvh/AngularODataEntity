import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataPropertyAnnotations, ODataEntityResource } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.interface';
import { Photo, PhotoSchema } from './photo.interface';
import { Person, PersonSchema } from './person.interface';
import { Trip, TripSchema } from './trip.interface';


@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static path: string = 'People';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';
  
  // Actions
  
  // Functions
  
  // Navigations
  public Friends(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<[Person[], ODataEntitiesAnnotations]> {
    return this.navigationProperty<Person>(entity, 'Friends')
      .collection(options);
  }
  public addPersonToFriends<Person>(entity: Person, target: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.ref(entity, 'Friends')
      .add(target);
  }
  public removePersonFromFriends<Person>(entity: Person, target?: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.ref(entity, 'Friends')
      .remove({etag, target});
  }
  public Trips(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<[Trip[], ODataEntitiesAnnotations]> {
    return this.navigationProperty<Trip>(entity, 'Trips')
      .collection(options);
  }
  public addTripToTrips<Trip>(entity: Person, target: ODataEntityResource<Trip>, etag?: string): Observable<any> {
    return this.ref(entity, 'Trips')
      .add(target);
  }
  public removeTripFromTrips<Trip>(entity: Person, target?: ODataEntityResource<Trip>, etag?: string): Observable<any> {
    return this.ref(entity, 'Trips')
      .remove({etag, target});
  }
  public Photo(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<[Photo, ODataEntityAnnotations]> {
    return this.navigationProperty<Photo>(entity, 'Photo')
      .single(options);
  }
  public setPhotoAsPhoto<Photo>(entity: Person, target: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.ref(entity, 'Photo')
      .set(target, {etag});
  }
  public unsetPhotoAsPhoto<Photo>(entity: Person, target?: ODataEntityResource<Photo>, etag?: string): Observable<any> {
    return this.ref(entity, 'Photo')
      .remove({etag, target});
  }
  
}
