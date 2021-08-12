import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

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
    return this.entity().asModel<PersonModel<Person>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  personCollection(models?: Partial<Person>[]): PersonCollection<Person, PersonModel<Person>> {
    return this.entities().asCollection<PersonModel<Person>, PersonCollection<Person, PersonModel<Person>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public friends(key: EntityKey<Person>): ODataNavigationPropertyResource<Person> { 
    return this.entity(key).navigationProperty<Person>('Friends'); 
  }
  public fetchFriends(key: EntityKey<Person>, options?: HttpQueryOptions<Person>) {
    return this.fetchNavigationProperty<Person>(
      this.friends(key), 
      'entities', options) as Observable<ODataEntities<Person>>;
  }
  public addPersonToFriends(key: EntityKey<Person>, target: ODataEntityResource<ODataEntities<Person>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.friends(key).reference()
      .add(target);
  }
  public removePersonFromFriends(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Person>>, etag?: string} = {}): Observable<any> {
    return this.friends(key).reference()
      .remove(target);
  }
  public airline(key: EntityKey<Person>): ODataNavigationPropertyResource<Airline> { 
    return this.entity(key).navigationProperty<Airline>('Airline'); 
  }
  public fetchAirline(key: EntityKey<Person>, options?: HttpQueryOptions<Airline>) {
    return this.fetchNavigationProperty<Airline>(
      this.airline(key), 
      'entity', options) as Observable<ODataEntity<Airline>>;
  }
  public setAirlineAsAirline(key: EntityKey<Person>, target: ODataEntityResource<ODataEntity<Airline>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.airline(key).reference()
      .set(target, {etag});
  }
  public unsetAirlineAsAirline(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Airline>>, etag?: string} = {}): Observable<any> {
    return this.airline(key).reference()
      .unset({etag});
  }
  public from(key: EntityKey<Person>): ODataNavigationPropertyResource<Airport> { 
    return this.entity(key).navigationProperty<Airport>('From'); 
  }
  public fetchFrom(key: EntityKey<Person>, options?: HttpQueryOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>(
      this.from(key), 
      'entity', options) as Observable<ODataEntity<Airport>>;
  }
  public setAirportAsFrom(key: EntityKey<Person>, target: ODataEntityResource<ODataEntity<Airport>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.from(key).reference()
      .set(target, {etag});
  }
  public unsetAirportAsFrom(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Airport>>, etag?: string} = {}): Observable<any> {
    return this.from(key).reference()
      .unset({etag});
  }
  public to(key: EntityKey<Person>): ODataNavigationPropertyResource<Airport> { 
    return this.entity(key).navigationProperty<Airport>('To'); 
  }
  public fetchTo(key: EntityKey<Person>, options?: HttpQueryOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>(
      this.to(key), 
      'entity', options) as Observable<ODataEntity<Airport>>;
  }
  public setAirportAsTo(key: EntityKey<Person>, target: ODataEntityResource<ODataEntity<Airport>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.to(key).reference()
      .set(target, {etag});
  }
  public unsetAirportAsTo(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Airport>>, etag?: string} = {}): Observable<any> {
    return this.to(key).reference()
      .unset({etag});
  }
  public photo(key: EntityKey<Person>): ODataNavigationPropertyResource<Photo> { 
    return this.entity(key).navigationProperty<Photo>('Photo'); 
  }
  public fetchPhoto(key: EntityKey<Person>, options?: HttpQueryOptions<Photo>) {
    return this.fetchNavigationProperty<Photo>(
      this.photo(key), 
      'entity', options) as Observable<ODataEntity<Photo>>;
  }
  public setPhotoAsPhoto(key: EntityKey<Person>, target: ODataEntityResource<ODataEntity<Photo>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.photo(key).reference()
      .set(target, {etag});
  }
  public unsetPhotoAsPhoto(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Photo>>, etag?: string} = {}): Observable<any> {
    return this.photo(key).reference()
      .unset({etag});
  }
  public photos(key: EntityKey<Person>): ODataNavigationPropertyResource<Photo> { 
    return this.entity(key).navigationProperty<Photo>('Photos'); 
  }
  public fetchPhotos(key: EntityKey<Person>, options?: HttpQueryOptions<Photo>) {
    return this.fetchNavigationProperty<Photo>(
      this.photos(key), 
      'entities', options) as Observable<ODataEntities<Photo>>;
  }
  public addPhotoToPhotos(key: EntityKey<Person>, target: ODataEntityResource<ODataEntities<Photo>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.photos(key).reference()
      .add(target);
  }
  public removePhotoFromPhotos(key: EntityKey<Person>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Photo>>, etag?: string} = {}): Observable<any> {
    return this.photos(key).reference()
      .remove(target);
  }
  //#endregion
}
