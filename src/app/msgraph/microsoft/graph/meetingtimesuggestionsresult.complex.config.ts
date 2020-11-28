import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.complex';
import { MeetingTimeSuggestionsResultModel } from './meetingtimesuggestionsresult.model';
import { MeetingTimeSuggestionsResultCollection } from './meetingtimesuggestionsresult.collection';
//#endregion

export const MeetingTimeSuggestionsResultConfig = {
  name: "meetingTimeSuggestionsResult",
  model: MeetingTimeSuggestionsResultModel,
  collection: MeetingTimeSuggestionsResultCollection,
  annotations: [],
  fields: {
    emptySuggestionsReason: {type: 'Edm.String'},
    meetingTimeSuggestions: {type: 'graph.meetingTimeSuggestion', collection: true}
  }
} as StructuredTypeConfig<MeetingTimeSuggestionsResult>;