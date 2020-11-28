import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
//#endregion

export interface RemoteLockActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  unlockPin?: string;
  //#endregion
}