import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipants } from './meetingparticipants.complex';
import { MeetingParticipantsModel } from './meetingparticipants.model';
import { MeetingParticipantsCollection } from './meetingparticipants.collection';
//#endregion

export const MeetingParticipantsConfig = {
  name: "meetingParticipants",
  model: MeetingParticipantsModel,
  collection: MeetingParticipantsCollection,
  annotations: [],
  fields: {
    attendees: {type: 'graph.meetingParticipantInfo', collection: true},
    organizer: {type: 'graph.meetingParticipantInfo'}
  }
} as StructuredTypeConfig<MeetingParticipants>;