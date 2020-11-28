import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceManagementSettings } from './devicemanagementsettings.complex';
import { DeviceManagementSettingsCollection } from './devicemanagementsettings.collection';
//#endregion

export class DeviceManagementSettingsModel<E extends DeviceManagementSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  deviceComplianceCheckinThresholdDays: number;
  isScheduledActionEnabled: boolean;
  secureByDefault: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}