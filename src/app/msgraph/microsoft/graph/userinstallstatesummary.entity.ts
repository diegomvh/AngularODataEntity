import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
//#endregion

export interface UserInstallStateSummary extends Entity {
  //#region ODataApi Properties
  userName?: string;
  installedDeviceCount: number;
  failedDeviceCount: number;
  notInstalledDeviceCount: number;
  deviceStates?: DeviceInstallState[];
  //#endregion
}