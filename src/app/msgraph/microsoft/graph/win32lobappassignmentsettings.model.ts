import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { Win32LobAppNotification } from './win32lobappnotification.enum';
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { Win32LobAppAssignmentSettings } from './win32lobappassignmentsettings.complex';
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { MobileAppInstallTimeSettingsModel } from './mobileappinstalltimesettings.model';
import { Win32LobAppRestartSettingsModel } from './win32lobapprestartsettings.model';
import { MobileAppInstallTimeSettingsCollection } from './mobileappinstalltimesettings.collection';
import { Win32LobAppAssignmentSettingsCollection } from './win32lobappassignmentsettings.collection';
import { Win32LobAppRestartSettingsCollection } from './win32lobapprestartsettings.collection';
//#endregion

export class Win32LobAppAssignmentSettingsModel<E extends Win32LobAppAssignmentSettings> extends MobileAppAssignmentSettingsModel<E> {
  //#region ODataApi Properties
  installTimeSettings?: MobileAppInstallTimeSettingsModel<MobileAppInstallTimeSettings>;
  notifications: Win32LobAppNotification;
  restartSettings?: Win32LobAppRestartSettingsModel<Win32LobAppRestartSettings>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}