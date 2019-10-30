import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntitySet, ODataProperty, ODataEntityRequest, ODataCollection } from 'angular-odata';

import { PersonGender } from './persongender.enum';


@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static set: string = 'People';
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
  public addPersonToFriends<Person>(entity: Person, target: ODataEntityRequest<Person>): Observable<any> {
    return this.ref(entity, 'Friends')
      .add(target);
  }
  public removePersonFromFriends<Person>(entity: Person, target?: ODataEntityRequest<Person>): Observable<any> {
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
  public addTripToTrips<Trip>(entity: Person, target: ODataEntityRequest<Trip>): Observable<any> {
    return this.ref(entity, 'Trips')
      .add(target);
  }
  public removeTripFromTrips<Trip>(entity: Person, target?: ODataEntityRequest<Trip>): Observable<any> {
    return this.ref(entity, 'Trips')
      .remove({etag: this.client.resolveEtag(entity), target});
  }
  public Photo(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<Photo> {
    return this.navigationProperty<Photo>(entity, 'Photo')
      .single(options);
  }
  public setPhotoAsPhoto<Photo>(entity: Person, target: ODataEntityRequest<Photo>): Observable<any> {
    return this.ref(entity, 'Photo')
      .set(target, {etag: this.client.resolveEtag(entity)});
  }
  public unsetPhotoAsPhoto<Photo>(entity: Person, target?: ODataEntityRequest<Photo>): Observable<any> {
    return this.ref(entity, 'Photo')
      .remove({etag: this.client.resolveEtag(entity), target});
  }
  
}
