import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

@Model()
export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  UserName!: string;
  
  
  @ModelField()
  FirstName!: string;
  
  
  @ModelField()
  LastName!: string;
  
  
  @ModelField()
  Emails?: string[];
  
  
  @ModelField()
  AddressInfo?: LocationCollection<Location, LocationModel<Location>>;
  
  
  @ModelField()
  Gender?: PersonGender;
  
  
  @ModelField()
  Concurrency!: number;
  
  
  @ModelField()
  Friends?: PersonCollection<Person, PersonModel<Person>>;
  
  
  @ModelField()
  Trips?: TripCollection<Trip, TripModel<Trip>>;
  
  
  @ModelField()
  Photo?: PhotoModel<Photo>;
  public getPhoto({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Photo>('Photo', {asEntity, ...options}) as Observable<PhotoModel<Photo>>;
  }
  public setPhoto(model: PhotoModel<Photo> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Photo>('Photo', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public airline({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getBinding<Airline>('Microsoft.OData.SampleService.Models.TripPin.Flight/Airline', 'model', {asEntity, ...options}) as Observable<ODataModel<Airline>>;
  }
  public from({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getBinding<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/From', 'model', {asEntity, ...options}) as Observable<ODataModel<Airport>>;
  }
  public to({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getBinding<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/To', 'model', {asEntity, ...options}) as Observable<ODataModel<Airport>>;
  }
  public photos({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getBinding<Photo>('Microsoft.OData.SampleService.Models.TripPin.Trip/Photos', 'collection', {asEntity, ...options}) as Observable<ODataCollection<Photo, ODataModel<Photo>>>;
  }
  //#endregion
}