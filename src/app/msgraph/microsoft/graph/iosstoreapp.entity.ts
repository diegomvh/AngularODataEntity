import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { MobileAppModel } from './mobileapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { MobileAppCollection } from './mobileapp.collection';
//#endregion

export interface IosStoreApp extends MobileApp {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceType;
  appStoreUrl?: string;
  bundleId?: string;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  //#endregion
}