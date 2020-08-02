import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export interface CustomerDemographic {
  //#region ODataApi Properties
  customerTypeID: string;
  customerDesc?: string;
  customers?: Customer[];
  //#endregion
}