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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

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

@Model()
export class FlightModel<E extends Flight> extends PublicTransportationModel<E> {
  //#region ODataApi Properties
  @ModelField()
  FlightNumber!: string;
  
  
  @ModelField()
  From?: AirportModel<Airport>;
  public getFrom({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Airport>('From', {asEntity, ...options}) as Observable<AirportModel<Airport>>;
  }
  public setFrom(model: AirportModel<Airport> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Airport>('From', model, {asEntity, ...options});
  }
  @ModelField()
  To?: AirportModel<Airport>;
  public getTo({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Airport>('To', {asEntity, ...options}) as Observable<AirportModel<Airport>>;
  }
  public setTo(model: AirportModel<Airport> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Airport>('To', model, {asEntity, ...options});
  }
  @ModelField()
  Airline?: AirlineModel<Airline>;
  public getAirline({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Airline>('Airline', {asEntity, ...options}) as Observable<AirlineModel<Airline>>;
  }
  public setAirline(model: AirlineModel<Airline> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Airline>('Airline', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}