import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InstallState } from './installstate.enum';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
//#endregion

export class DeviceInstallStateModel<E extends DeviceInstallState> extends EntityModel<E> {
  //#region ODataApi Properties
  deviceId?: string;
  deviceName?: string;
  errorCode?: string;
  installState: InstallState;
  lastSyncDateTime: Date;
  osDescription?: string;
  osVersion?: string;
  userName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}