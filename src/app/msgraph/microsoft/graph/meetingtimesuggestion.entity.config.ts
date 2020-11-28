import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
import { MeetingTimeSuggestionModel } from './meetingtimesuggestion.model';
import { MeetingTimeSuggestionCollection } from './meetingtimesuggestion.collection';
//#endregion

export const MeetingTimeSuggestionConfig = {
  name: "meetingTimeSuggestion",
  model: MeetingTimeSuggestionModel,
  collection: MeetingTimeSuggestionCollection,
  annotations: [],
  fields: {
    attendeeAvailability: {type: 'graph.attendeeAvailability', collection: true},
    confidence: {type: 'Edm.Double'},
    locations: {type: 'graph.location', collection: true},
    meetingTimeSlot: {type: 'graph.timeSlot'},
    order: {type: 'Edm.Int32'},
    organizerAvailability: {type: 'graph.freeBusyStatus'},
    suggestionReason: {type: 'Edm.String'}
  }
} as EntityConfig<MeetingTimeSuggestion>;