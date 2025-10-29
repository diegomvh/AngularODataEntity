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

import { Airline } from './airline.entity';

@Model()
export class AirlineModel<E extends Airline> extends ODataModel<E> {
  @ModelField()
  declare AirlineCode: string;
  public $$AirlineCode() {
    return this.property<string>('AirlineCode');
  }
  public $AirlineCode() {
    return this.getAttribute<string>('AirlineCode') as string;
  }
  
  public AirlineCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('AirlineCode', options) as Observable<string>;
  }

  @ModelField()
  declare Name: string;
  public $$Name() {
    return this.property<string>('Name');
  }
  public $Name() {
    return this.getAttribute<string>('Name') as string;
  }
  
  public Name$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Name', options) as Observable<string>;
  }

  
  
  
}