import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.entity';
//#endregion

export const MeetingTimeSuggestionsResultConfig = {
  name: "meetingTimeSuggestionsResult",
  annotations: [],
  fields: {
    meetingTimeSuggestions: {type: 'graph.meetingTimeSuggestion', collection: true},
    emptySuggestionsReason: {type: 'Edm.String'}
  }
} as EntityConfig<MeetingTimeSuggestionsResult>;