import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.entity';
import { MeetingTimeSuggestionModel } from './meetingtimesuggestion.model';
import { MeetingTimeSuggestionCollection } from './meetingtimesuggestion.collection';
import { MeetingTimeSuggestionsResultCollection } from './meetingtimesuggestionsresult.collection';
//#endregion

export class MeetingTimeSuggestionsResultModel<E extends MeetingTimeSuggestionsResult> extends ODataModel<E> {
  //#region ODataApi Properties
  emptySuggestionsReason?: string;
  meetingTimeSuggestions?: MeetingTimeSuggestionCollection<MeetingTimeSuggestion, MeetingTimeSuggestionModel<MeetingTimeSuggestion>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}