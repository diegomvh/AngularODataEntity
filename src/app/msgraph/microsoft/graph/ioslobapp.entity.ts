import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
//#endregion

export interface IosLobApp extends MobileLobApp {
  //#region ODataApi Properties
  bundleId?: string;
  applicableDeviceType: IosDeviceType;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
  expirationDateTime?: Date;
  versionNumber?: string;
  buildNumber?: string;
  //#endregion
}