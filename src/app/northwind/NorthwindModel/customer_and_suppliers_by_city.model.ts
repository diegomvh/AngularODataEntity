import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityCollection } from './customer_and_suppliers_by_city.collection';
//#endregion

@Model()
export class CustomerAndSuppliersByCityModel<E extends CustomerAndSuppliersByCity> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  City?: string;
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  ContactName?: string;
  
  
  @ModelField()
  Relationship!: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}