import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamFunSettingsModel } from './teamfunsettings.model';
//#endregion

export class TeamFunSettingsCollection<E extends TeamFunSettings, M extends TeamFunSettingsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}