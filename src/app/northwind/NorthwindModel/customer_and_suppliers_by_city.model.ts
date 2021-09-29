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
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityCollection } from './customer_and_suppliers_by_city.collection';
//#endregion

@Model()
export class CustomerAndSuppliersByCityModel<E extends CustomerAndSuppliersByCity> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  City?: string;
  public $City() {
    return this.property<string>('City');
  }
  public getCity(options?: ODataOptions) {
    return this.getValue<string>('City', options) as Observable<string>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: ODataOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
  }
  
  @ModelField()
  ContactName?: string;
  public $ContactName() {
    return this.property<string>('ContactName');
  }
  public getContactName(options?: ODataOptions) {
    return this.getValue<string>('ContactName', options) as Observable<string>;
  }
  
  @ModelField()
  Relationship!: string;
  public $Relationship() {
    return this.property<string>('Relationship');
  }
  public getRelationship(options?: ODataOptions) {
    return this.getValue<string>('Relationship', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}