import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
//#endregion

export interface ManagedAndroidStoreApp extends ManagedApp {
  //#region ODataApi Properties
  packageId?: string;
  appStoreUrl: string;
  minimumSupportedOperatingSystem: AndroidMinimumOperatingSystem;
  //#endregion
}