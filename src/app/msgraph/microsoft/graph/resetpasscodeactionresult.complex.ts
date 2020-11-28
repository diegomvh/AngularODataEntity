import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.complex';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
//#endregion

export interface ResetPasscodeActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  passcode?: string;
  //#endregion
}