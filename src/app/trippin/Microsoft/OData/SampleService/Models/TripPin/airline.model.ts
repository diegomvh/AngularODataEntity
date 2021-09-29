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
import { Airline } from './airline.entity';
import { AirlineCollection } from './airline.collection';
//#endregion

@Model()
export class AirlineModel<E extends Airline> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  AirlineCode!: string;
  public $AirlineCode() {
    return this.property<string>('AirlineCode');
  }
  public getAirlineCode(options?: ODataOptions) {
    return this.getValue<string>('AirlineCode', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: ODataOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}