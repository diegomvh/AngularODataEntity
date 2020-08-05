import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
//#endregion

export interface RemoteLockActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  unlockPin?: string;
  //#endregion
}