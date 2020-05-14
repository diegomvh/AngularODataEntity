import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, HttpOptions } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Person } from './person.entity';
import { Flight } from './flight.entity';
import { Trip } from './trip.entity';


@Injectable()
export class PeopleService extends ODataEntityService<Person> {
  static path: string = 'People';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.People';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';

  // Actions
  
  // Functions
  
  // Navigations
  public Friends(entity: Person, options?: HttpOptions): Observable<[Person[], ODataEntitiesAnnotations]> {
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
  public Airline(entity: Person, options?: HttpOptions): Observable<[Flight, ODataEntityAnnotations]> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline')
      .single(options);
  }
  public setFlightAsAirline<Flight>(entity: Person, target: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline').reference()
      .set(target, {etag});
  }
  public unsetFlightAsAirline<Flight>(entity: Person, target?: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/Airline').reference()
      .remove({etag, target});
  }
  public From(entity: Person, options?: HttpOptions): Observable<[Flight, ODataEntityAnnotations]> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From')
      .single(options);
  }
  public setFlightAsFrom<Flight>(entity: Person, target: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From').reference()
      .set(target, {etag});
  }
  public unsetFlightAsFrom<Flight>(entity: Person, target?: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/From').reference()
      .remove({etag, target});
  }
  public To(entity: Person, options?: HttpOptions): Observable<[Flight, ODataEntityAnnotations]> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To')
      .single(options);
  }
  public setFlightAsTo<Flight>(entity: Person, target: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To').reference()
      .set(target, {etag});
  }
  public unsetFlightAsTo<Flight>(entity: Person, target?: ODataEntityResource<Flight>, etag?: string): Observable<any> {
    return this.navigationProperty<Flight>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Flight/To').reference()
      .remove({etag, target});
  }
  public Photo(entity: Person, options?: HttpOptions): Observable<[Person, ODataEntityAnnotations]> {
    return this.navigationProperty<Person>(entity, 'Photo')
      .single(options);
  }
  public setPersonAsPhoto<Person>(entity: Person, target: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.navigationProperty<Person>(entity, 'Photo').reference()
      .set(target, {etag});
  }
  public unsetPersonAsPhoto<Person>(entity: Person, target?: ODataEntityResource<Person>, etag?: string): Observable<any> {
    return this.navigationProperty<Person>(entity, 'Photo').reference()
      .remove({etag, target});
  }
  public Photos(entity: Person, options?: HttpOptions): Observable<[Trip[], ODataEntitiesAnnotations]> {
    return this.navigationProperty<Trip>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos')
      .collection(options);
  }
  public addTripToPhotos<Trip>(entity: Person, target: ODataEntityResource<Trip>, etag?: string): Observable<any> {
    return this.navigationProperty<Trip>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos').reference()
      .add(target);
  }
  public removeTripFromPhotos<Trip>(entity: Person, target?: ODataEntityResource<Trip>, etag?: string): Observable<any> {
    return this.navigationProperty<Trip>(entity, 'Microsoft.OData.SampleService.Models.TripPin.Trip/Photos').reference()
      .remove({etag, target});
  }
  
}
