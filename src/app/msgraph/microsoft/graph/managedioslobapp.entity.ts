import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { ManagedMobileLobAppCollection } from './managedmobilelobapp.collection';
//#endregion

export interface ManagedIOSLobApp extends ManagedMobileLobApp {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceType;
  buildNumber?: string;
  bundleId?: string;
  expirationDateTime?: Date;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  versionNumber?: string;
  //#endregion
}