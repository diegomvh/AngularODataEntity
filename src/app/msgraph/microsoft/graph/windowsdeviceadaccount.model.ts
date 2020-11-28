import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.entity';
import { WindowsDeviceADAccountCollection } from './windowsdeviceadaccount.collection';
//#endregion

export class WindowsDeviceADAccountModel<E extends WindowsDeviceADAccount> extends WindowsDeviceAccountModel<E> {
  //#region ODataApi Properties
  domainName?: string;
  userName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}