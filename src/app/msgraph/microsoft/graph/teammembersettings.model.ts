import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamMemberSettings } from './teammembersettings.entity';
import { TeamMemberSettingsCollection } from './teammembersettings.collection';
//#endregion

export class TeamMemberSettingsModel<E extends TeamMemberSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  allowAddRemoveApps?: boolean;
  allowCreatePrivateChannels?: boolean;
  allowCreateUpdateChannels?: boolean;
  allowCreateUpdateRemoveConnectors?: boolean;
  allowCreateUpdateRemoveTabs?: boolean;
  allowDeleteChannels?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}