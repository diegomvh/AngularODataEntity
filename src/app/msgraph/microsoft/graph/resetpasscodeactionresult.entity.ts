import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
//#endregion

export interface ResetPasscodeActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  passcode?: string;
  //#endregion
}