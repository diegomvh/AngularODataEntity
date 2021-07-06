import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Model()
export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  Address?: AddressModel<Address>;
  
  
  @ModelField()
  Location?: any;
  
  
  @ModelField()
  Concurrency!: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}