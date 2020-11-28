import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
//#endregion

export class SettingStateDeviceSummaryModel<E extends SettingStateDeviceSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  instancePath?: string;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  settingName?: string;
  unknownDeviceCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}