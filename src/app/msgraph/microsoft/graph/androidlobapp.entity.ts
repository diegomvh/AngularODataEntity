import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { MobileLobAppModel } from './mobilelobapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export interface AndroidLobApp extends MobileLobApp {
  //#region ODataApi Properties
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  packageId?: string;
  versionCode?: string;
  versionName?: string;
  //#endregion
}