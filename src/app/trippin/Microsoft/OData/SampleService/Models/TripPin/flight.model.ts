import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
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

export class FlightModel<E extends Flight> extends PublicTransportationModel<E> {
  //#region ODataApi Properties
  FlightNumber!: string;
  From?: AirportModel<Airport>;
  To?: AirportModel<Airport>;
  Airline?: AirlineModel<Airline>;
  //#endregion
  //#region ODataApi Setters
  public setFrom(model: AirportModel<Airport> | null, options?: HttpOptions) {
    return this._setReference<Airport>('From', model, options);
  }public setTo(model: AirportModel<Airport> | null, options?: HttpOptions) {
    return this._setReference<Airport>('To', model, options);
  }public setAirline(model: AirlineModel<Airline> | null, options?: HttpOptions) {
    return this._setReference<Airline>('Airline', model, options);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}