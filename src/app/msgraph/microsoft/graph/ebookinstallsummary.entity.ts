import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface EBookInstallSummary extends Entity {
  //#region ODataApi Properties
  installedDeviceCount: number;
  failedDeviceCount: number;
  notInstalledDeviceCount: number;
  installedUserCount: number;
  failedUserCount: number;
  notInstalledUserCount: number;
  //#endregion
}