import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Call } from './call.entity';
import { CallModel } from './call.model';
import { CallCollection } from './call.collection';
//#endregion

export const CallConfig = {
  name: "call",
  base: "microsoft.graph.entity",
  open: true,
  model: CallModel,
  collection: CallCollection,
  annotations: [],
  fields: {
    callbackUri: {type: 'Edm.String', nullable: false},
    callChainId: {type: 'Edm.String'},
    callOptions: {type: 'graph.callOptions'},
    callRoutes: {type: 'graph.callRoute', collection: true},
    chatInfo: {type: 'graph.chatInfo'},
    direction: {type: 'graph.callDirection'},
    incomingContext: {type: 'graph.incomingContext'},
    mediaConfig: {type: 'graph.mediaConfig'},
    mediaState: {type: 'graph.callMediaState'},
    meetingInfo: {type: 'graph.meetingInfo'},
    myParticipantId: {type: 'Edm.String'},
    requestedModalities: {type: 'graph.modality', collection: true},
    resultInfo: {type: 'graph.resultInfo'},
    source: {type: 'graph.participantInfo'},
    state: {type: 'graph.callState'},
    subject: {type: 'Edm.String'},
    targets: {type: 'graph.invitationParticipantInfo', collection: true},
    tenantId: {type: 'Edm.String'},
    toneInfo: {type: 'graph.toneInfo'},
    transcription: {type: 'graph.callTranscriptionInfo'},
    operations: {type: 'graph.commsOperation', collection: true, navigation: true},
    participants: {type: 'graph.participant', collection: true, navigation: true}
  }
} as EntityConfig<Call>;