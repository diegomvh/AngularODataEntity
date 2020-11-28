import { StructuredTypeConfig } from 'angular-odata';

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
    allowedPresenters: {type: 'graph.onlineMeetingPresenters'},
    audioConferencing: {type: 'graph.audioConferencing'},
    chatInfo: {type: 'graph.chatInfo'},
    creationDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    externalId: {type: 'Edm.String'},
    isEntryExitAnnounced: {type: 'Edm.Boolean'},
    joinInformation: {type: 'graph.itemBody'},
    joinWebUrl: {type: 'Edm.String'},
    lobbyBypassSettings: {type: 'graph.lobbyBypassSettings'},
    participants: {type: 'graph.meetingParticipants'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    subject: {type: 'Edm.String'},
    videoTeleconferenceId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnlineMeeting>;