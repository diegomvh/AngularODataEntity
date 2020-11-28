import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ResponseType } from './responsetype.enum';
//#endregion

export interface ResponseStatus {
  //#region ODataApi Properties
  response?: ResponseType;
  time?: Date;
  //#endregion
}