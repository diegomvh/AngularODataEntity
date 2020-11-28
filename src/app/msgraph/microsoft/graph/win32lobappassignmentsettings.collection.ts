import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
import { Win32LobAppNotification } from './win32lobappnotification.enum';
import { MobileAppInstallTimeSettings } from './mobileappinstalltimesettings.complex';
import { Win32LobAppAssignmentSettings } from './win32lobappassignmentsettings.complex';
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { MobileAppInstallTimeSettingsModel } from './mobileappinstalltimesettings.model';
import { Win32LobAppAssignmentSettingsModel } from './win32lobappassignmentsettings.model';
import { Win32LobAppRestartSettingsModel } from './win32lobapprestartsettings.model';
import { MobileAppInstallTimeSettingsCollection } from './mobileappinstalltimesettings.collection';
import { Win32LobAppRestartSettingsCollection } from './win32lobapprestartsettings.collection';
//#endregion

export class Win32LobAppAssignmentSettingsCollection<E extends Win32LobAppAssignmentSettings, M extends Win32LobAppAssignmentSettingsModel<E>> extends MobileAppAssignmentSettingsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}