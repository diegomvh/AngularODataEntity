import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
//#endregion

export interface ManagedIOSStoreApp extends ManagedApp {
  //#region ODataApi Properties
  bundleId?: string;
  appStoreUrl: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem: IosMinimumOperatingSystem;
  //#endregion
}