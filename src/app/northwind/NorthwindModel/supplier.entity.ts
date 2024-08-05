//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApiGen Type
export const SupplierType = 'NorthwindModel.Supplier';//#endregion
export interface Supplier {
  //#region ODataApiGen Properties
  SupplierID: number;
  CompanyName?: string;
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
  Products?: Product[];
  //#endregion
}