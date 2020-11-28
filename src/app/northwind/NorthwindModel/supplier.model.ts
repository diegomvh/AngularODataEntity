import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApi Properties
  SupplierID: number;
  CompanyName: string;
  ContactName?: string;
  ContactTitle?: string;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Phone?: string;
  Fax?: string;
  HomePage?: string;
  Products?: ProductCollection<Product, ProductModel<Product>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}