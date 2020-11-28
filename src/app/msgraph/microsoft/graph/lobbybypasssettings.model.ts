import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LobbyBypassScope } from './lobbybypassscope.enum';
import { LobbyBypassSettings } from './lobbybypasssettings.complex';
import { LobbyBypassSettingsCollection } from './lobbybypasssettings.collection';
//#endregion

export class LobbyBypassSettingsModel<E extends LobbyBypassSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  isDialInBypassEnabled?: boolean;
  scope?: LobbyBypassScope;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}