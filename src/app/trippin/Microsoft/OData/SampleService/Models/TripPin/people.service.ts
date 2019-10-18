import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityRequest, EntityCollection } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.entity';
import { Photo, PhotoSchema } from './photo.entity';
import { Person, PersonSchema } from './person.entity';
import { Trip, TripSchema } from './trip.entity';


@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static set: string = 'People';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';
  
  // Actions
  
  // Functions
  
  // Navigations
  public Friends(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<EntityCollection<Person>> {
    return this.navigationProperty<Person>(entity, 'Friends', {
        headers: options && options.headers,
        params: options && options.params,
        responseType: 'entityset',
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public addPersonToFriends<Person>(entity: Person, target: ODataEntityRequest<Person>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.createRef(entity, 'Friends', target, {
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public removePersonFromFriends<Person>(entity: Person, target?: ODataEntityRequest<Person>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.deleteRef(entity, 'Friends', {
        target: target,
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public Trips(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<EntityCollection<Trip>> {
    return this.navigationProperty<Trip>(entity, 'Trips', {
        headers: options && options.headers,
        params: options && options.params,
        responseType: 'entityset',
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public addTripToTrips<Trip>(entity: Person, target: ODataEntityRequest<Trip>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.createRef(entity, 'Trips', target, {
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public removeTripFromTrips<Trip>(entity: Person, target?: ODataEntityRequest<Trip>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.deleteRef(entity, 'Trips', {
        target: target,
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public Photo(entity: Person, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<Photo> {
    return this.navigationProperty<Photo>(entity, 'Photo', {
        headers: options && options.headers,
        params: options && options.params,
        responseType: 'entity',
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public setPhotoAsPhoto<Photo>(entity: Person, target: ODataEntityRequest<Photo>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.createRef(entity, 'Photo', target, {
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  public unsetPhotoAsPhoto<Photo>(entity: Person, target?: ODataEntityRequest<Photo>, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<any> {
    return this.deleteRef(entity, 'Photo', {
        target: target,
        headers: options && options.headers,
        params: options && options.params,
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
    });
  }
  
}
