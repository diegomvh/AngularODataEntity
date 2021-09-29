//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export interface CustomerDemographic {
  //#region ODataApiGen Properties
  CustomerTypeID: string;
  CustomerDesc?: string;
  Customers?: Customer[];
  //#endregion
}