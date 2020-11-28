import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GiphyRatingType } from './giphyratingtype.enum';
import { TeamFunSettings } from './teamfunsettings.complex';
import { TeamFunSettingsCollection } from './teamfunsettings.collection';
//#endregion

export class TeamFunSettingsModel<E extends TeamFunSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  allowCustomMemes?: boolean;
  allowGiphy?: boolean;
  allowStickersAndMemes?: boolean;
  giphyContentRating?: GiphyRatingType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}