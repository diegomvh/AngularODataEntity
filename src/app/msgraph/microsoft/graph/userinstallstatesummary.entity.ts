import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceInstallState } from './deviceinstallstate.entity';
import { EntityModel } from './entity.model';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { EntityCollection } from './entity.collection';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
//#endregion

export interface UserInstallStateSummary extends Entity {
  //#region ODataApi Properties
  failedDeviceCount: number;
  installedDeviceCount: number;
  notInstalledDeviceCount: number;
  userName?: string;
  deviceStates?: DeviceInstallState[];
  //#endregion
}