import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { MobileAppModel } from './mobileapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export interface AndroidStoreApp extends MobileApp {
  //#region ODataApi Properties
  appStoreUrl?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
  packageId?: string;
  //#endregion
}