import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Trip } from './trip.entity';
import { LocationModel } from './location.model';
import { PhotoModel } from './photo.model';
import { TripModel } from './trip.model';
import { LocationCollection } from './location.collection';
import { PhotoCollection } from './photo.collection';
import { PersonCollection } from './person.collection';
import { TripCollection } from './trip.collection';
import { AirlineModel } from './airline.model';
import { Airline } from './airline.entity';
import { AirportModel } from './airport.model';
import { Airport } from './airport.entity';
//#endregion

export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  UserName: string;
  FirstName: string;
  LastName: string;
  Emails?: string[];
  AddressInfo?: LocationCollection<Location, LocationModel<Location>>;
  Gender?: PersonGender;
  Concurrency: number;
  Friends?: PersonCollection<Person, PersonModel<Person>>;
  Trips?: TripCollection<Trip, TripModel<Trip>>;
  Photo?: PhotoModel<Photo>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public setPhoto(model: PhotoModel<Photo> | null) {
    this.setNavigationProperty<Photo, PhotoModel<Photo>>(this._config.field('Photo'), model);
  }
  //#endregion
}