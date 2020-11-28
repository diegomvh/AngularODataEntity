import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
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
    upn: {type: 'Edm.String'}
  }
} as EntityConfig<MeetingParticipantInfo>;