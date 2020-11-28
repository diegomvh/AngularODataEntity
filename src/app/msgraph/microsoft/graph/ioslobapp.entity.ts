import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { MobileLobAppModel } from './mobilelobapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export interface IosLobApp extends MobileLobApp {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceType;
  buildNumber?: string;
  bundleId?: string;
  expirationDateTime?: Date;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  versionNumber?: string;
  //#endregion
}