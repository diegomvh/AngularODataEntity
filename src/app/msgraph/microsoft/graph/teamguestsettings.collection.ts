import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamGuestSettingsModel } from './teamguestsettings.model';
//#endregion

export class TeamGuestSettingsCollection<E extends TeamGuestSettings, M extends TeamGuestSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}