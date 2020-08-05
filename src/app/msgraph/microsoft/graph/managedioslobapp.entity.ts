import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
//#endregion

export interface ManagedIOSLobApp extends ManagedMobileLobApp {
  //#region ODataApi Properties
  bundleId?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  expirationDateTime?: Date;
  versionNumber?: string;
  buildNumber?: string;
  //#endregion
}