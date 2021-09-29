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
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Model()
export class AirportModel<E extends Airport> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  IcaoCode!: string;
  public $IcaoCode() {
    return this.property<string>('IcaoCode');
  }
  public getIcaoCode(options?: ODataOptions) {
    return this.getValue<string>('IcaoCode', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: ODataOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  @ModelField()
  IataCode!: string;
  public $IataCode() {
    return this.property<string>('IataCode');
  }
  public getIataCode(options?: ODataOptions) {
    return this.getValue<string>('IataCode', options) as Observable<string>;
  }
  
  @ModelField()
  Location!: AirportLocationModel<AirportLocation>;
  public $Location() {
    return this.property<AirportLocationModel<AirportLocation>>('Location');
  }
  public getLocation(options?: ODataOptions) {
    return this.getValue<AirportLocationModel<AirportLocation>>('Location', options) as Observable<AirportLocationModel<AirportLocation>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}