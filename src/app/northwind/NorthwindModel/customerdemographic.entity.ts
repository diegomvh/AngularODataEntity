import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
//#endregion

export interface CustomerDemographic {
  //#region ODataApi Properties
  CustomerTypeID: string;
  CustomerDesc?: string;
  Customers?: Customer;
  //#endregion
}