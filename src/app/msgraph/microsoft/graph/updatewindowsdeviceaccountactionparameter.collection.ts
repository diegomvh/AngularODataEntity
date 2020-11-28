import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.entity';
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { UpdateWindowsDeviceAccountActionParameterModel } from './updatewindowsdeviceaccountactionparameter.model';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export class UpdateWindowsDeviceAccountActionParameterCollection<E extends UpdateWindowsDeviceAccountActionParameter, M extends UpdateWindowsDeviceAccountActionParameterModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}