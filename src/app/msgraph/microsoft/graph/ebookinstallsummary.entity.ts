import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface EBookInstallSummary extends Entity {
  //#region ODataApi Properties
  failedDeviceCount: number;
  failedUserCount: number;
  installedDeviceCount: number;
  installedUserCount: number;
  notInstalledDeviceCount: number;
  notInstalledUserCount: number;
  //#endregion
}