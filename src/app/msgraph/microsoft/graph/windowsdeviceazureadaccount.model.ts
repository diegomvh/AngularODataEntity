import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAzureADAccount } from './windowsdeviceazureadaccount.entity';
import { WindowsDeviceAzureADAccountCollection } from './windowsdeviceazureadaccount.collection';
//#endregion

export class WindowsDeviceAzureADAccountModel<E extends WindowsDeviceAzureADAccount> extends WindowsDeviceAccountModel<E> {
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