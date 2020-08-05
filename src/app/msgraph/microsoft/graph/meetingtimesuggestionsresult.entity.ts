import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
//#endregion

export interface MeetingTimeSuggestionsResult {
  //#region ODataApi Properties
  meetingTimeSuggestions?: MeetingTimeSuggestion[];
  emptySuggestionsReason?: string;
  //#endregion
}