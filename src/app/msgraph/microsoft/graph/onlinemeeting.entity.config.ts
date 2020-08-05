import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeeting } from './onlinemeeting.entity';
//#endregion

export const OnlineMeetingConfig = {
  name: "onlineMeeting",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    creationDateTime: {type: 'Edm.DateTimeOffset'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    joinWebUrl: {type: 'Edm.String'},
    subject: {type: 'Edm.String'},
    participants: {type: 'graph.meetingParticipants'},
    audioConferencing: {type: 'graph.audioConferencing'},
    chatInfo: {type: 'graph.chatInfo'},
    videoTeleconferenceId: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    joinInformation: {type: 'graph.itemBody'}
  }
} as EntityConfig<OnlineMeeting>;