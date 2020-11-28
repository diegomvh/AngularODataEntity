import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamGuestSettingsCollection } from './teamguestsettings.collection';
//#endregion

export class TeamGuestSettingsModel<E extends TeamGuestSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  allowCreateUpdateChannels?: boolean;
  allowDeleteChannels?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}