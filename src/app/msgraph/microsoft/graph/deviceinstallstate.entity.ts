import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallState } from './installstate.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceInstallState extends Entity {
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
}