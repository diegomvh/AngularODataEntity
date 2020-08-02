﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export interface Supplier {
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
  Products?: Product;
  //#endregion
}