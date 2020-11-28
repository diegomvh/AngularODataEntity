import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeeting } from './onlinemeeting.entity';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
//#endregion

export const OnlineMeetingConfig = {
  name: "onlineMeeting",
  base: "microsoft.graph.entity",
  open: true,
  model: OnlineMeetingModel,
  collection: OnlineMeetingCollection,
  annotations: [],
  fields: {
    audioConferencing: {type: 'graph.audioConferencing'},
    chatInfo: {type: 'graph.chatInfo'},
    creationDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    externalId: {type: 'Edm.String'},
    joinInformation: {type: 'graph.itemBody'},
    joinWebUrl: {type: 'Edm.String'},
    participants: {type: 'graph.meetingParticipants'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    subject: {type: 'Edm.String'},
    videoTeleconferenceId: {type: 'Edm.String'}
  }
} as EntityConfig<OnlineMeeting>;