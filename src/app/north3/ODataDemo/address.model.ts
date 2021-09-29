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
import { Address } from './address.complex';
import { AddressCollection } from './address.collection';
//#endregion

@Model()
export class AddressModel<E extends Address> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Street?: string;
  public $Street() {
    return this.property<string>('Street');
  }
  public getStreet(options?: ODataOptions) {
    return this.getValue<string>('Street', options) as Observable<string>;
  }
  
  @ModelField()
  City?: string;
  public $City() {
    return this.property<string>('City');
  }
  public getCity(options?: ODataOptions) {
    return this.getValue<string>('City', options) as Observable<string>;
  }
  
  @ModelField()
  State?: string;
  public $State() {
    return this.property<string>('State');
  }
  public getState(options?: ODataOptions) {
    return this.getValue<string>('State', options) as Observable<string>;
  }
  
  @ModelField()
  ZipCode?: string;
  public $ZipCode() {
    return this.property<string>('ZipCode');
  }
  public getZipCode(options?: ODataOptions) {
    return this.getValue<string>('ZipCode', options) as Observable<string>;
  }
  
  @ModelField()
  Country?: string;
  public $Country() {
    return this.property<string>('Country');
  }
  public getCountry(options?: ODataOptions) {
    return this.getValue<string>('Country', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}