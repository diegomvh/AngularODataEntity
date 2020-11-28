import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export class WindowsDeviceAccountModel<E extends WindowsDeviceAccount> extends ODataModel<E> {
  //#region ODataApi Properties
  password?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}