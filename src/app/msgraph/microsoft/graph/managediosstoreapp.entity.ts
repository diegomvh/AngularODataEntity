import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedApp } from './managedapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { ManagedAppModel } from './managedapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { ManagedAppCollection } from './managedapp.collection';
//#endregion

export interface ManagedIOSStoreApp extends ManagedApp {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceType;
  appStoreUrl: string;
  bundleId?: string;
  minimumSupportedOperatingSystem: IosMinimumOperatingSystem;
  //#endregion
}