import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LobbyBypassScope } from './lobbybypassscope.enum';
import { LobbyBypassSettings } from './lobbybypasssettings.complex';
import { LobbyBypassSettingsModel } from './lobbybypasssettings.model';
//#endregion

export class LobbyBypassSettingsCollection<E extends LobbyBypassSettings, M extends LobbyBypassSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}