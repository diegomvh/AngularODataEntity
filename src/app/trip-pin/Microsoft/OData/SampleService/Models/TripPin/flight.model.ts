import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
} from 'angular-odata';

import { Flight } from './flight.entity';
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationModel } from './public-transportation.model';
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';

@Model()
export class FlightModel<E extends Flight> extends PublicTransportationModel<E> {
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
    return this.getAttribute<Airport>('From') as Airport;
  }
  public From$$(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('From', model, options);
  }
  public From$(options?: ODataQueryArgumentsOptions<Airport>) {
    return this.fetchAttribute<Airport>('From', options) as Observable<Airport>;
  }

  @ModelField()
  To?: AirportModel<Airport>;
  public $$To() {
    return this.navigationProperty<Airport>('To');
  }
  public $To() {
    return this.getAttribute<Airport>('To') as Airport;
  }
  public To$$(model: AirportModel<Airport> | null, options?: ODataOptions) {
    return this.setReference<Airport>('To', model, options);
  }
  public To$(options?: ODataQueryArgumentsOptions<Airport>) {
    return this.fetchAttribute<Airport>('To', options) as Observable<Airport>;
  }

  @ModelField()
  Airline?: AirlineModel<Airline>;
  public $$Airline() {
    return this.navigationProperty<Airline>('Airline');
  }
  public $Airline() {
    return this.getAttribute<Airline>('Airline') as Airline;
  }
  public Airline$$(model: AirlineModel<Airline> | null, options?: ODataOptions) {
    return this.setReference<Airline>('Airline', model, options);
  }
  public Airline$(options?: ODataQueryArgumentsOptions<Airline>) {
    return this.fetchAttribute<Airline>('Airline', options) as Observable<Airline>;
  }

  
  
  
}