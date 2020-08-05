import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
//#endregion

export interface AndroidStoreApp extends MobileApp {
  //#region ODataApi Properties
  packageId?: string;
  appStoreUrl?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  //#endregion
}