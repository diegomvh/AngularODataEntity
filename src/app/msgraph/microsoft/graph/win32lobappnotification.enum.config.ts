import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppNotification } from './win32lobappnotification.enum';
//#endregion

export const Win32LobAppNotificationConfig = {
  name: "win32LobAppNotification",
  members: Win32LobAppNotification
} as EnumTypeConfig<Win32LobAppNotification>;