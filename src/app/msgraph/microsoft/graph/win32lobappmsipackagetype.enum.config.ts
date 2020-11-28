import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppMsiPackageType } from './win32lobappmsipackagetype.enum';
//#endregion

export const Win32LobAppMsiPackageTypeConfig = {
  name: "win32LobAppMsiPackageType",
  members: Win32LobAppMsiPackageType
} as EnumTypeConfig<Win32LobAppMsiPackageType>;