import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppReturnCodeType } from './win32lobappreturncodetype.enum';
//#endregion

export const Win32LobAppReturnCodeTypeConfig = {
  name: "win32LobAppReturnCodeType",
  members: Win32LobAppReturnCodeType
} as EnumTypeConfig<Win32LobAppReturnCodeType>;