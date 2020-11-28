import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.entity';
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { UpdateWindowsDeviceAccountActionParameterCollection } from './updatewindowsdeviceaccountactionparameter.collection';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export class UpdateWindowsDeviceAccountActionParameterModel<E extends UpdateWindowsDeviceAccountActionParameter> extends ODataModel<E> {
  //#region ODataApi Properties
  calendarSyncEnabled?: boolean;
  deviceAccount?: WindowsDeviceAccountModel<WindowsDeviceAccount>;
  deviceAccountEmail?: string;
  exchangeServer?: string;
  passwordRotationEnabled?: boolean;
  sessionInitiationProtocalAddress?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}