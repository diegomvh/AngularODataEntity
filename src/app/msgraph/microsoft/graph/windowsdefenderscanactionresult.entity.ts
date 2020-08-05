import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
//#endregion

export interface WindowsDefenderScanActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  scanType?: string;
  //#endregion
}