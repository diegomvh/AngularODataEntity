import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataSingle, ODataCollection, ODataValue, ODataEntityResource } from 'angular-odata';

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
  }): Observable<ODataCollection<Person>> {
    return this.navigationProperty<Person>(entity, 'Friends')
      .collection(options);
  }
  public addPersonToFriends<Person>(entity: Person, target: ODataEntityResource<Person>): Observable<any> {
    return this.ref(entity, 'Friends')
      .add(target);
  }
  public removePersonFromFriends<Person>(entity: Person, target?: ODataEntityResource<Person>): Observable<any> {
    return this.ref(entity, 'Friends')
      .remove({etag: this.client.resolveEtag(entity), target});
  }
  public Trips(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<ODataCollection<Trip>> {
    return this.navigationProperty<Trip>(entity, 'Trips')
      .collection(options);
  }
  public addTripToTrips<Trip>(entity: Person, target: ODataEntityResource<Trip>): Observable<any> {
    return this.ref(entity, 'Trips')
      .add(target);
  }
  public removeTripFromTrips<Trip>(entity: Person, target?: ODataEntityResource<Trip>): Observable<any> {
    return this.ref(entity, 'Trips')
      .remove({etag: this.client.resolveEtag(entity), target});
  }
  public Photo(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<ODataSingle<Photo>> {
    return this.navigationProperty<Photo>(entity, 'Photo')
      .single(options);
  }
  public setPhotoAsPhoto<Photo>(entity: Person, target: ODataEntityResource<Photo>): Observable<any> {
    return this.ref(entity, 'Photo')
      .set(target, {etag: this.client.resolveEtag(entity)});
  }
  public unsetPhotoAsPhoto<Photo>(entity: Person, target?: ODataEntityResource<Photo>): Observable<any> {
    return this.ref(entity, 'Photo')
      .remove({etag: this.client.resolveEtag(entity), target});
  }
  
}
