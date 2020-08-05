import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
//#endregion

export interface AndroidLobApp extends MobileLobApp {
  //#region ODataApi Properties
  packageId?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  versionName?: string;
  versionCode?: string;
  //#endregion
}