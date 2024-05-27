import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Properties
  @ModelField()
  UserName!: string;
  public $$UserName() {
    return this.property<string>('UserName');
  }
  public $UserName() {
    return this.getAttribute<string>('UserName') as string;
  }
  
  public UserName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('UserName', options) as Observable<string>;
  }
  @ModelField()
  FirstName!: string;
  public $$FirstName() {
    return this.property<string>('FirstName');
  }
  public $FirstName() {
    return this.getAttribute<string>('FirstName') as string;
  }
  
  public FirstName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('FirstName', options) as Observable<string>;
  }
  @ModelField()
  LastName!: string;
  public $$LastName() {
    return this.property<string>('LastName');
  }
  public $LastName() {
    return this.getAttribute<string>('LastName') as string;
  }
  
  public LastName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('LastName', options) as Observable<string>;
  }
  @ModelField()
  Emails?: string[];
  public $$Emails() {
    return this.property<string[]>('Emails');
  }
  public $Emails() {
    return this.getAttribute<string[]>('Emails') as string[];
  }
  
  public Emails$(options?: ODataQueryArgumentsOptions<string[]>) {
    return this.fetchAttribute<string[]>('Emails', options) as Observable<string[]>;
  }
  @ModelField()
  AddressInfo?: LocationCollection<Location, LocationModel<Location>>;
  public $$AddressInfo() {
    return this.property<LocationCollection<Location, LocationModel<Location>>>('AddressInfo');
  }
  public $AddressInfo() {
    return this.getAttribute<LocationCollection<Location, LocationModel<Location>>>('AddressInfo') as LocationCollection<Location, LocationModel<Location>>;
  }
  
  public AddressInfo$(options?: ODataQueryArgumentsOptions<LocationCollection<Location, LocationModel<Location>>>) {
    return this.fetchAttribute<LocationCollection<Location, LocationModel<Location>>>('AddressInfo', options) as Observable<LocationCollection<Location, LocationModel<Location>>>;
  }
  @ModelField()
  Gender?: PersonGender;
  public $$Gender() {
    return this.property<PersonGender>('Gender');
  }
  public $Gender() {
    return this.getAttribute<PersonGender>('Gender') as PersonGender;
  }
  
  public Gender$(options?: ODataQueryArgumentsOptions<PersonGender>) {
    return this.fetchAttribute<PersonGender>('Gender', options) as Observable<PersonGender>;
  }
  @ModelField()
  Concurrency!: number;
  public $$Concurrency() {
    return this.property<number>('Concurrency');
  }
  public $Concurrency() {
    return this.getAttribute<number>('Concurrency') as number;
  }
  
  public Concurrency$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Concurrency', options) as Observable<number>;
  }
  @ModelField()
  Friends?: PersonCollection<Person, PersonModel<Person>>;
  public $$Friends() {
    return this.navigationProperty<Person>('Friends');
  }
  public $Friends() {
    return this.getAttribute<Person>('Friends') as PersonCollection<Person, PersonModel<Person>>;
  }
  public Friends$$(model: PersonCollection<Person, PersonModel<Person>> | null, options?: ODataOptions) {
    return this.setReference<Person>('Friends', model, options);
  }
  public Friends$(options?: ODataQueryArgumentsOptions<Person>) {
      return this.fetchAttribute<Person>('Friends', options) as Observable<PersonCollection<Person, PersonModel<Person>>>;
    }
  @ModelField()
  Trips?: TripCollection<Trip, TripModel<Trip>>;
  public $$Trips() {
    return this.navigationProperty<Trip>('Trips');
  }
  public $Trips() {
    return this.getAttribute<Trip>('Trips') as TripCollection<Trip, TripModel<Trip>>;
  }
  public Trips$$(model: TripCollection<Trip, TripModel<Trip>> | null, options?: ODataOptions) {
    return this.setReference<Trip>('Trips', model, options);
  }
  public Trips$(options?: ODataQueryArgumentsOptions<Trip>) {
      return this.fetchAttribute<Trip>('Trips', options) as Observable<TripCollection<Trip, TripModel<Trip>>>;
    }
  @ModelField()
  Photo?: PhotoModel<Photo>;
  public $$Photo() {
    return this.navigationProperty<Photo>('Photo');
  }
  public $Photo() {
    return this.getAttribute<Photo>('Photo') as PhotoModel<Photo>;
  }
  public Photo$$(model: PhotoModel<Photo> | null, options?: ODataOptions) {
    return this.setReference<Photo>('Photo', model, options);
  }
  public Photo$(options?: ODataQueryArgumentsOptions<Photo>) {
      return this.fetchAttribute<Photo>('Photo', options) as Observable<PhotoModel<Photo>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public asFlightAirline(options?: ODataQueryArgumentsOptions<Airline>) {
    return this.fetchNavigationProperty<Airline>('Microsoft.OData.SampleService.Models.TripPin.Flight/Airline', 'model', options) as Observable<ODataModel<Airline>>;
  }
  public asFlightFrom(options?: ODataQueryArgumentsOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/From', 'model', options) as Observable<ODataModel<Airport>>;
  }
  public asFlightTo(options?: ODataQueryArgumentsOptions<Airport>) {
    return this.fetchNavigationProperty<Airport>('Microsoft.OData.SampleService.Models.TripPin.Flight/To', 'model', options) as Observable<ODataModel<Airport>>;
  }
  public asTripPhotos(options?: ODataQueryArgumentsOptions<Photo>) {
    return this.fetchNavigationProperty<Photo>('Microsoft.OData.SampleService.Models.TripPin.Trip/Photos', 'collection', options) as Observable<ODataCollection<Photo, ODataModel<Photo>>>;
  }
  //#endregion
}