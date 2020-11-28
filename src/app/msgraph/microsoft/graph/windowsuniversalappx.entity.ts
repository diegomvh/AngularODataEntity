import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { WindowsDeviceType } from './windowsdevicetype.enum';
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.entity';
import { WindowsMinimumOperatingSystemModel } from './windowsminimumoperatingsystem.model';
import { MobileLobAppModel } from './mobilelobapp.model';
import { WindowsMinimumOperatingSystemCollection } from './windowsminimumoperatingsystem.collection';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export interface WindowsUniversalAppX extends MobileLobApp {
  //#region ODataApi Properties
  applicableArchitectures: WindowsArchitecture;
  applicableDeviceTypes: WindowsDeviceType;
  identityName?: string;
  identityPublisherHash: string;
  identityResourceIdentifier?: string;
  identityVersion?: string;
  isBundle: boolean;
  minimumSupportedOperatingSystem: WindowsMinimumOperatingSystem;
  //#endregion
}