import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
//#endregion

export interface Phone {
  //#region ODataApi Properties
  language?: string;
  number?: string;
  region?: string;
  type?: PhoneType;
  //#endregion
}