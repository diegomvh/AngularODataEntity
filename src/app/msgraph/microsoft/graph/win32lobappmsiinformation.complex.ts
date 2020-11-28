import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppMsiPackageType } from './win32lobappmsipackagetype.enum';
//#endregion

export interface Win32LobAppMsiInformation {
  //#region ODataApi Properties
  packageType: Win32LobAppMsiPackageType;
  productCode?: string;
  productName?: string;
  productVersion?: string;
  publisher?: string;
  requiresReboot: boolean;
  upgradeCode?: string;
  //#endregion
}