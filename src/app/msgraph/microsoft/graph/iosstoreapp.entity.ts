import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
//#endregion

export interface IosStoreApp extends MobileApp {
  //#region ODataApi Properties
  bundleId?: string;
  appStoreUrl?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  //#endregion
}