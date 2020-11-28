import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamMessagingSettings } from './teammessagingsettings.complex';
import { TeamMessagingSettingsCollection } from './teammessagingsettings.collection';
//#endregion

export class TeamMessagingSettingsModel<E extends TeamMessagingSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  allowChannelMentions?: boolean;
  allowOwnerDeleteMessages?: boolean;
  allowTeamMentions?: boolean;
  allowUserDeleteMessages?: boolean;
  allowUserEditMessages?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}