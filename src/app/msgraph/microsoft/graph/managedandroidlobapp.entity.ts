import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
//#endregion

export interface ManagedAndroidLobApp extends ManagedMobileLobApp {
  //#region ODataApi Properties
  packageId?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  versionName?: string;
  versionCode?: string;
  //#endregion
}