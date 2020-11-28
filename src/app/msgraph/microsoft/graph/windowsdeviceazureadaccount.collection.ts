import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
import { WindowsDeviceAzureADAccount } from './windowsdeviceazureadaccount.complex';
import { WindowsDeviceAzureADAccountModel } from './windowsdeviceazureadaccount.model';
//#endregion

export class WindowsDeviceAzureADAccountCollection<E extends WindowsDeviceAzureADAccount, M extends WindowsDeviceAzureADAccountModel<E>> extends WindowsDeviceAccountCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}