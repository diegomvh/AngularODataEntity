import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingTimeSuggestion } from './meetingtimesuggestion.entity';
//#endregion

export const MeetingTimeSuggestionConfig = {
  name: "MeetingTimeSuggestion",
  annotations: [],
  fields: {
    confidence: {type: 'Edm.Double'},
    order: {type: 'Edm.Int32'},
    organizerAvailability: {type: 'graph.freeBusyStatus'},
    attendeeAvailability: {type: 'graph.attendeeAvailability', collection: true},
    locations: {type: 'graph.location', collection: true},
    suggestionReason: {type: 'Edm.String'},
    meetingTimeSlot: {type: 'graph.timeSlot'}
  }
} as EntityConfig<MeetingTimeSuggestion>;