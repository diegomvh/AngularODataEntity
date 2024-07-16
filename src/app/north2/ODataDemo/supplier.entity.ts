//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Address } from './address.complex';
import { Product } from './product.entity';
import { AddressModel } from './address.model';
import { ProductModel } from './product.model';
import { AddressCollection } from './address.collection';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApiGen Type
export const SupplierType = 'ODataDemo.Supplier';//#endregion
export interface Supplier {
  //#region ODataApiGen Properties
  ID: number;
  Name?: string;
  Address: Address;
  Concurrency: number;
  Products?: Product[];
  //#endregion
}