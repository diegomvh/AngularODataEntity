﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Address } from './address.entity';
import { Product } from './product.entity';
//#endregion

export interface Supplier {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Address: Address;
  Concurrency: number;
  Products?: Product[];
  //#endregion
}