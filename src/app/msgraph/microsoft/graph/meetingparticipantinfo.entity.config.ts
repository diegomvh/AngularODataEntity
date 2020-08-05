import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
//#endregion

export const MeetingParticipantInfoConfig = {
  name: "meetingParticipantInfo",
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet'},
    upn: {type: 'Edm.String'}
  }
} as EntityConfig<MeetingParticipantInfo>;