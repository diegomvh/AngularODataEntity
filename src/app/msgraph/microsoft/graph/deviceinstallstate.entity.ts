import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallState } from './installstate.enum';
//#endregion

export interface DeviceInstallState extends Entity {
  //#region ODataApi Properties
  deviceName?: string;
  deviceId?: string;
  lastSyncDateTime: Date;
  installState: InstallState;
  errorCode?: string;
  osVersion?: string;
  osDescription?: string;
  userName?: string;
  //#endregion
}