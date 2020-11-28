import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.complex';
import { MeetingParticipantInfoModel } from './meetingparticipantinfo.model';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
//#endregion

export const MeetingParticipantInfoConfig = {
  name: "meetingParticipantInfo",
  model: MeetingParticipantInfoModel,
  collection: MeetingParticipantInfoCollection,
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet'},
    role: {type: 'graph.onlineMeetingRole'},
    upn: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MeetingParticipantInfo>;