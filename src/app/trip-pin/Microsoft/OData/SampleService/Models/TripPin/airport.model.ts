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

import { Airport } from './airport.entity';
import { AirportLocation } from './airport-location.complex';
import { AirportLocationModel } from './airport-location.model';

@Model()
export class AirportModel<E extends Airport> extends ODataModel<E> {
  @ModelField()
  IcaoCode!: string;
  public $$IcaoCode() {
    return this.property<string>('IcaoCode');
  }
  public $IcaoCode() {
    return this.getAttribute<string>('IcaoCode') as string;
  }
  
  public IcaoCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('IcaoCode', options) as Observable<string>;
  }

  @ModelField()
  Name!: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }

  @ModelField()
  IataCode!: string;
  public $$IataCode() {
    return this.property<string>('IataCode');
  }
  public $IataCode() {
    return this.getAttribute<string>('IataCode') as string;
  }
  
  public IataCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('IataCode', options) as Observable<string>;
  }

  @ModelField()
  Location!: AirportLocationModel<AirportLocation>;
  public $$Location() {
    return this.property<AirportLocationModel<AirportLocation>>('Location');
  }
  public $Location() {
    return this.getAttribute<AirportLocationModel<AirportLocation>>('Location') as AirportLocationModel<AirportLocation>;
  }
  
  public Location$(options?: ODataQueryArgumentsOptions<AirportLocationModel<AirportLocation>>) {
    return this.fetchAttribute<AirportLocationModel<AirportLocation>>('Location', options) as Observable<AirportLocationModel<AirportLocation>>;
  }

  
  
  
}