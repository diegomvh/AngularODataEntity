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
import { Address } from './address.complex';
import { AddressCollection } from './address.collection';
//#endregion

@Model()
export class AddressModel<E extends Address> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Street?: string;
  public $$Street() {
    return this.property<string>('Street');
  }
  public $Street() {
    return this.getAttribute<string>('Street') as string;
  }
  
  public Street$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Street', options) as Observable<string>;
  }
  @ModelField()
  City?: string;
  public $$City() {
    return this.property<string>('City');
  }
  public $City() {
    return this.getAttribute<string>('City') as string;
  }
  
  public City$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('City', options) as Observable<string>;
  }
  @ModelField()
  State?: string;
  public $$State() {
    return this.property<string>('State');
  }
  public $State() {
    return this.getAttribute<string>('State') as string;
  }
  
  public State$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('State', options) as Observable<string>;
  }
  @ModelField()
  ZipCode?: string;
  public $$ZipCode() {
    return this.property<string>('ZipCode');
  }
  public $ZipCode() {
    return this.getAttribute<string>('ZipCode') as string;
  }
  
  public ZipCode$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ZipCode', options) as Observable<string>;
  }
  @ModelField()
  Country?: string;
  public $$Country() {
    return this.property<string>('Country');
  }
  public $Country() {
    return this.getAttribute<string>('Country') as string;
  }
  
  public Country$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Country', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}