import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
import { UserInstallStateSummaryCollection } from './userinstallstatesummary.collection';
//#endregion

export class UserInstallStateSummaryModel<E extends UserInstallStateSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  failedDeviceCount: number;
  installedDeviceCount: number;
  notInstalledDeviceCount: number;
  userName?: string;
  deviceStates?: DeviceInstallStateCollection<DeviceInstallState, DeviceInstallStateModel<DeviceInstallState>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}