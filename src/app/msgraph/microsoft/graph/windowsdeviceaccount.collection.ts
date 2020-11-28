import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.complex';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
//#endregion

export class WindowsDeviceAccountCollection<E extends WindowsDeviceAccount, M extends WindowsDeviceAccountModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}