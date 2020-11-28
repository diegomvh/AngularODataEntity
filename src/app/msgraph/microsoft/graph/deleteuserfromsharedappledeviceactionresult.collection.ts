import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeleteUserFromSharedAppleDeviceActionResult } from './deleteuserfromsharedappledeviceactionresult.complex';
import { DeleteUserFromSharedAppleDeviceActionResultModel } from './deleteuserfromsharedappledeviceactionresult.model';
//#endregion

export class DeleteUserFromSharedAppleDeviceActionResultCollection<E extends DeleteUserFromSharedAppleDeviceActionResult, M extends DeleteUserFromSharedAppleDeviceActionResultModel<E>> extends DeviceActionResultCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}