import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamMemberSettingsModel } from './teammembersettings.model';
//#endregion

export class TeamMemberSettingsCollection<E extends TeamMemberSettings, M extends TeamMemberSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}