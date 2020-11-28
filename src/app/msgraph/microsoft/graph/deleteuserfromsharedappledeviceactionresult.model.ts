import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.entity';
import { DeleteUserFromSharedAppleDeviceActionResultCollection } from './deleteuserfromsharedappledeviceactionresult.collection';
//#endregion

export class DeleteUserFromSharedAppleDeviceActionResultModel<E extends DeleteUserFromSharedAppleDeviceActionResult> extends DeviceActionResultModel<E> {
  //#region ODataApi Properties
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}