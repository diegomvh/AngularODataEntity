import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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

export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  UserName!: string;
  FirstName!: string;
  LastName!: string;
  Emails?: string[];
  AddressInfo?: LocationCollection<Location, LocationModel<Location>>;
  Gender?: PersonGender;
  Concurrency!: number;
  Friends?: PersonCollection<Person, PersonModel<Person>>;
  Trips?: TripCollection<Trip, TripModel<Trip>>;
  Photo?: PhotoModel<Photo>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public airline() {
    return this._cast<any>('Microsoft.OData.SampleService.Models.TripPin.Flight').navigationProperty<Airline>('Airline').asModel<AirlineModel<Airline>>({});
  }
  public from() {
    return this._cast<any>('Microsoft.OData.SampleService.Models.TripPin.Flight').navigationProperty<Airport>('From').asModel<AirportModel<Airport>>({});
  }
  public to() {
    return this._cast<any>('Microsoft.OData.SampleService.Models.TripPin.Flight').navigationProperty<Airport>('To').asModel<AirportModel<Airport>>({});
  }
  //#endregion
}
