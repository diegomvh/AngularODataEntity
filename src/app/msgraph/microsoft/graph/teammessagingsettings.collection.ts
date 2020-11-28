import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamMessagingSettings } from './teammessagingsettings.complex';
import { TeamMessagingSettingsModel } from './teammessagingsettings.model';
//#endregion

export class TeamMessagingSettingsCollection<E extends TeamMessagingSettings, M extends TeamMessagingSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}