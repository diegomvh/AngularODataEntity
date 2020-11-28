import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { ManagedAppModel } from './managedapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { ManagedAppCollection } from './managedapp.collection';
//#endregion

export interface ManagedAndroidStoreApp extends ManagedApp {
  //#region ODataApi Properties
  appStoreUrl: string;
  minimumSupportedOperatingSystem: AndroidMinimumOperatingSystem;
  packageId?: string;
  //#endregion
}