import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
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
  public $UserName() {
    return this.property<string>('UserName');
  }
  public getUserName(options?: HttpOptions) {
    return this.getValue<string>('UserName', options) as Observable<string>;
  }
  
  @ModelField()
  FirstName!: string;
  public $FirstName() {
    return this.property<string>('FirstName');
  }
  public getFirstName(options?: HttpOptions) {
    return this.getValue<string>('FirstName', options) as Observable<string>;
  }
  
  @ModelField()
  LastName!: string;
  public $LastName() {
    return this.property<string>('LastName');
  }
  public getLastName(options?: HttpOptions) {
    return this.getValue<string>('LastName', options) as Observable<string>;
  }
  
  @ModelField()
  Emails?: string[];
  public $Emails() {
    return this.property<string[]>('Emails');
  }
  public getEmails(options?: HttpOptions) {
    return this.getValue<string[]>('Emails', options) as Observable<string[]>;
  }
  
  @ModelField()
  AddressInfo?: LocationCollection<Location, LocationModel<Location>>;
  public $AddressInfo() {
    return this.property<LocationCollection<Location, LocationModel<Location>>>('AddressInfo');
  }
  public getAddressInfo(options?: HttpOptions) {
    return this.getValue<LocationCollection<Location, LocationModel<Location>>>('AddressInfo', options) as Observable<LocationCollection<Location, LocationModel<Location>>>;
  }
  
  @ModelField()
  Gender?: PersonGender;
  public $Gender() {
    return this.property<PersonGender>('Gender');
  }
  public getGender(options?: HttpOptions) {
    return this.getValue<PersonGender>('Gender', options) as Observable<PersonGender>;
  }
  
  @ModelField()
  Concurrency!: number;
  public $Concurrency() {
    return this.property<number>('Concurrency');
  }
  public getConcurrency(options?: HttpOptions) {
    return this.getValue<number>('Concurrency', options) as Observable<number>;
  }
  
  @ModelField()
  Friends?: PersonCollection<Person, PersonModel<Person>>;
  public $Friends() {
    return this.navigationProperty<Person>('Friends');
  }
  public getFriends() {
    return this.getReference<Person>('Friends') as PersonCollection<Person, PersonModel<Person>>;
  }
  public setFriends(model: PersonCollection<Person, PersonModel<Person>> | null, options?: HttpOptions) {
    return this.setReference<Person>('Friends', model, options);
  }
  @ModelField()
  Trips?: TripCollection<Trip, TripModel<Trip>>;
  public $Trips() {
    return this.navigationProperty<Trip>('Trips');
  }
  public getTrips() {
    return this.getReference<Trip>('Trips') as TripCollection<Trip, TripModel<Trip>>;
  }
  public setTrips(model: TripCollection<Trip, TripModel<Trip>> | null, options?: HttpOptions) {
    return this.setReference<Trip>('Trips', model, options);
  }
  @ModelField()
  Photo?: PhotoModel<Photo>;
  public $Photo() {
    return this.navigationProperty<Photo>('Photo');
  }
  public getPhoto() {
    return this.getReference<Photo>('Photo') as PhotoModel<Photo>;
  }
  public setPhoto(model: PhotoModel<Photo> | null, options?: HttpOptions) {
    return this.setReference<Photo>('Photo', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public airline(options?: HttpQueryOptions<Airline>) {
    return this.fetchNavigationProperty<Airline>('Microsoft.OData.SampleService.Models.TripPin.Flight/Airline', 'model', options) as Observable<ODataModel<Airline>>;
  }
  public from(options?: HttpQueryOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/From', 'model', options) as Observable<ODataModel<Airport>>;
  }
  public to(options?: HttpQueryOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/To', 'model', options) as Observable<ODataModel<Airport>>;
  }
  public photos(options?: HttpQueryOptions<Photo>) {
    return this.fetchNavigationProperty<Photo>('Microsoft.OData.SampleService.Models.TripPin.Trip/Photos', 'collection', options) as Observable<ODataCollection<Photo, ODataModel<Photo>>>;
  }
  //#endregion
}