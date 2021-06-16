//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export interface CustomerDemographic {
  //#region ODataApi Properties
  CustomerTypeID: string;
  CustomerDesc?: string;
  Customers?: Customer[];
  //#endregion
}