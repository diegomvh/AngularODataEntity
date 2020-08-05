import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { WindowsDeviceType } from './windowsdevicetype.enum';
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.entity';
//#endregion

export interface WindowsUniversalAppX extends MobileLobApp {
  //#region ODataApi Properties
  applicableArchitectures: WindowsArchitecture;
  applicableDeviceTypes: WindowsDeviceType;
  identityName?: string;
  identityPublisherHash: string;
  identityResourceIdentifier?: string;
  isBundle: boolean;
  minimumSupportedOperatingSystem: WindowsMinimumOperatingSystem;
  identityVersion?: string;
  //#endregion
}