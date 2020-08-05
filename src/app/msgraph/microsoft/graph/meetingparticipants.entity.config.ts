import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipants } from './meetingparticipants.entity';
//#endregion

export const MeetingParticipantsConfig = {
  name: "MeetingParticipants",
  annotations: [],
  fields: {
    organizer: {type: 'graph.meetingParticipantInfo'},
    attendees: {type: 'graph.meetingParticipantInfo', collection: true}
  }
} as EntityConfig<MeetingParticipants>;