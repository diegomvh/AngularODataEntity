import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { ManagedMobileLobAppCollection } from './managedmobilelobapp.collection';
//#endregion

export interface ManagedAndroidLobApp extends ManagedMobileLobApp {
  //#region ODataApi Properties
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  packageId?: string;
  versionCode?: string;
  versionName?: string;
  //#endregion
}