import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.complex';
import { WindowsDeviceADAccountModel } from './windowsdeviceadaccount.model';
//#endregion

export class WindowsDeviceADAccountCollection<E extends WindowsDeviceADAccount, M extends WindowsDeviceADAccountModel<E>> extends WindowsDeviceAccountCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}