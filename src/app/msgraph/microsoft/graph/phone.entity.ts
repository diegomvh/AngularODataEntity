import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
//#endregion

export interface Phone {
  //#region ODataApi Properties
  type?: PhoneType;
  number?: string;
  region?: string;
  language?: string;
  //#endregion
}