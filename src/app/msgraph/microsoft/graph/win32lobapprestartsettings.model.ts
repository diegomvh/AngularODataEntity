import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { Win32LobAppRestartSettingsCollection } from './win32lobapprestartsettings.collection';
//#endregion

export class Win32LobAppRestartSettingsModel<E extends Win32LobAppRestartSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  countdownDisplayBeforeRestartInMinutes: number;
  gracePeriodInMinutes: number;
  restartNotificationSnoozeDurationInMinutes?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}