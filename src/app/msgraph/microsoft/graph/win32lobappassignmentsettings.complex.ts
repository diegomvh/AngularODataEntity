import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
import { Win32LobAppNotification } from './win32lobappnotification.enum';
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppInstallTimeSettingsModel } from './mobileappinstalltimesettings.model';
import { Win32LobAppRestartSettingsModel } from './win32lobapprestartsettings.model';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { MobileAppInstallTimeSettingsCollection } from './mobileappinstalltimesettings.collection';
import { Win32LobAppRestartSettingsCollection } from './win32lobapprestartsettings.collection';
//#endregion

export interface Win32LobAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  installTimeSettings?: MobileAppInstallTimeSettings;
  notifications: Win32LobAppNotification;
  restartSettings?: Win32LobAppRestartSettings;
  //#endregion
}