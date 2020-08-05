import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
//#endregion

export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  userPrincipalName?: string;
  //#endregion
}