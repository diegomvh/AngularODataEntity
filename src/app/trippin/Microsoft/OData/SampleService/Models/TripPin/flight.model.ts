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
  public $$FlightNumber() {
    return this.property<string>('FlightNumber');
  }
  public $FlightNumber() {
    return this.getAttribute<string>('FlightNumber') as string;
  }
  
  public FlightNumber$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('FlightNumber', options) as Observable<string>;
  }
  @ModelField()
  From?: AirportModel<Airport>;
  public $$From() {
    return this.navigationProperty<Airport>('From');
  }
  public $From() {
    return this.getAttribute<Airport>('From') as AirportModel<Airport>;
  }
  public From$$(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('From', model, options);
  }
  public From$(options?: ODataQueryArgumentsOptions<Airport>) {
      return this.fetchAttribute<Airport>('From', options) as Observable<AirportModel<Airport>>;
    }
  @ModelField()
  To?: AirportModel<Airport>;
  public $$To() {
    return this.navigationProperty<Airport>('To');
  }
  public $To() {
    return this.getAttribute<Airport>('To') as AirportModel<Airport>;
  }
  public To$$(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('To', model, options);
  }
  public To$(options?: ODataQueryArgumentsOptions<Airport>) {
      return this.fetchAttribute<Airport>('To', options) as Observable<AirportModel<Airport>>;
    }
  @ModelField()
  Airline?: AirlineModel<Airline>;
  public $$Airline() {
    return this.navigationProperty<Airline>('Airline');
  }
  public $Airline() {
    return this.getAttribute<Airline>('Airline') as AirlineModel<Airline>;
  }
  public Airline$$(model: AirlineModel<Airline> | null, options?: ODataOptions) {
    return this.setReference<Airline>('Airline', model, options);
  }
  public Airline$(options?: ODataQueryArgumentsOptions<Airline>) {
      return this.fetchAttribute<Airline>('Airline', options) as Observable<AirlineModel<Airline>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}