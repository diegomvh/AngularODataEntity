import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
//#endregion

export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  userPrincipalName?: string;
  //#endregion
}