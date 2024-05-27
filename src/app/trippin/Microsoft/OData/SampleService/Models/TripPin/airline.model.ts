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
import { Airline } from './airline.entity';
import { AirlineCollection } from './airline.collection';
//#endregion

@Model()
export class AirlineModel<E extends Airline> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  AirlineCode!: string;
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
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}