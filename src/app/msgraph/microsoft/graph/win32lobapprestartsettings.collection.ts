import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { Win32LobAppRestartSettingsModel } from './win32lobapprestartsettings.model';
//#endregion

export class Win32LobAppRestartSettingsCollection<E extends Win32LobAppRestartSettings, M extends Win32LobAppRestartSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}