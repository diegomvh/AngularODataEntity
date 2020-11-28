import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChangeType } from './changetype.enum';
//#endregion

export interface CommsNotification {
  //#region ODataApi Properties
  changeType: ChangeType;
  resourceUrl: string;
  //#endregion
}