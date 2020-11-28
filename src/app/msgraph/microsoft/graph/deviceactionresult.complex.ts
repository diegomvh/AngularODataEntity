import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ActionState } from './actionstate.enum';
//#endregion

export interface DeviceActionResult {
  //#region ODataApi Properties
  actionName?: string;
  actionState: ActionState;
  lastUpdatedDateTime: Date;
  startDateTime: Date;
  //#endregion
}