import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.complex';
import { Product } from './product.entity';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { ProductModel } from './product.model';
import { AddressCollection } from './address.collection';
import { ProductCollection } from './product.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export class SupplierModel<E extends Supplier> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Address: AddressModel<Address>;
  Concurrency: number;
  Products?: ProductCollection<Product, ProductModel<Product>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}