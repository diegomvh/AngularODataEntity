//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
//#endregion

export interface PersonDetail {
  //#region ODataApi Properties
  PersonID: number;
  Age: number;
  Gender: boolean;
  Phone?: string;
  Address?: Address;
  Photo: any;
  //#endregion
}