import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
import { DeviceManagementSettingsModel } from './devicemanagementsettings.model';
//#endregion

export class DeviceManagementSettingsCollection<E extends DeviceManagementSettings, M extends DeviceManagementSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}