//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
//#endregion

export interface Supplier {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Address?: Address;
  Location?: any;
  Concurrency: number;
  //#endregion
}