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
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicTransportationModel } from './publictransportation.model';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { Flight } from './flight.entity';
import { AirlineModel } from './airline.model';
import { AirportModel } from './airport.model';
import { AirlineCollection } from './airline.collection';
import { AirportCollection } from './airport.collection';
import { FlightCollection } from './flight.collection';
//#endregion

@Model()
export class FlightModel<E extends Flight> extends PublicTransportationModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  FlightNumber!: string;
  public $FlightNumber() {
    return this.property<string>('FlightNumber');
  }
  public getFlightNumber(options?: ODataOptions) {
    return this.getValue<string>('FlightNumber', options) as Observable<string>;
  }
  
  @ModelField()
  From?: AirportModel<Airport>;
  public $From() {
    return this.navigationProperty<Airport>('From');
  }
  public getFrom() {
    return this.getReference<Airport>('From') as AirportModel<Airport>;
  }
  public setFrom(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('From', model, options);
  }
  @ModelField()
  To?: AirportModel<Airport>;
  public $To() {
    return this.navigationProperty<Airport>('To');
  }
  public getTo() {
    return this.getReference<Airport>('To') as AirportModel<Airport>;
  }
  public setTo(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('To', model, options);
  }
  @ModelField()
  Airline?: AirlineModel<Airline>;
  public $Airline() {
    return this.navigationProperty<Airline>('Airline');
  }
  public getAirline() {
    return this.getReference<Airline>('Airline') as AirlineModel<Airline>;
  }
  public setAirline(model: AirlineModel<Airline> | null, options?: ODataOptions) {
    return this.setReference<Airline>('Airline', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}