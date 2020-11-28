import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.entity';
import { MeetingTimeSuggestionModel } from './meetingtimesuggestion.model';
import { MeetingTimeSuggestionsResultModel } from './meetingtimesuggestionsresult.model';
import { MeetingTimeSuggestionCollection } from './meetingtimesuggestion.collection';
//#endregion

export class MeetingTimeSuggestionsResultCollection<E extends MeetingTimeSuggestionsResult, M extends MeetingTimeSuggestionsResultModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}