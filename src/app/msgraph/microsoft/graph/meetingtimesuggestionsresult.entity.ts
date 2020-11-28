import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
import { MeetingTimeSuggestionModel } from './meetingtimesuggestion.model';
import { MeetingTimeSuggestionCollection } from './meetingtimesuggestion.collection';
//#endregion

export interface MeetingTimeSuggestionsResult {
  //#region ODataApi Properties
  emptySuggestionsReason?: string;
  meetingTimeSuggestions?: MeetingTimeSuggestion[];
  //#endregion
}