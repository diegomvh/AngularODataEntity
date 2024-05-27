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
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityCollection } from './customer_and_suppliers_by_city.collection';
//#endregion

@Model()
export class CustomerAndSuppliersByCityModel<E extends CustomerAndSuppliersByCity> extends ODataModel<E> {
  //#region ODataApiGen Properties
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
  CompanyName!: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }
  @ModelField()
  ContactName?: string;
  public $$ContactName() {
    return this.property<string>('ContactName');
  }
  public $ContactName() {
    return this.getAttribute<string>('ContactName') as string;
  }
  
  public ContactName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ContactName', options) as Observable<string>;
  }
  @ModelField()
  Relationship!: string;
  public $$Relationship() {
    return this.property<string>('Relationship');
  }
  public $Relationship() {
    return this.getAttribute<string>('Relationship') as string;
  }
  
  public Relationship$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Relationship', options) as Observable<string>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}