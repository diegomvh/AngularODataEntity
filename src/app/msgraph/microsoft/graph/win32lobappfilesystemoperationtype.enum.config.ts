import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppFileSystemOperationType } from './win32lobappfilesystemoperationtype.enum';
//#endregion

export const Win32LobAppFileSystemOperationTypeConfig = {
  name: "win32LobAppFileSystemOperationType",
  members: Win32LobAppFileSystemOperationType
} as EnumTypeConfig<Win32LobAppFileSystemOperationType>;