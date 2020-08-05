import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Call } from './call.entity';
//#endregion

export const CallConfig = {
  name: "Call",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    state: {type: 'graph.callState'},
    mediaState: {type: 'graph.callMediaState'},
    resultInfo: {type: 'graph.resultInfo'},
    direction: {type: 'graph.callDirection'},
    subject: {type: 'Edm.String'},
    callbackUri: {type: 'Edm.String', nullable: false},
    callRoutes: {type: 'graph.callRoute', collection: true},
    source: {type: 'graph.participantInfo'},
    targets: {type: 'graph.invitationParticipantInfo', collection: true},
    requestedModalities: {type: 'graph.modality', collection: true},
    mediaConfig: {type: 'graph.mediaConfig'},
    chatInfo: {type: 'graph.chatInfo'},
    callOptions: {type: 'graph.callOptions'},
    meetingInfo: {type: 'graph.meetingInfo'},
    tenantId: {type: 'Edm.String'},
    myParticipantId: {type: 'Edm.String'},
    toneInfo: {type: 'graph.toneInfo'},
    callChainId: {type: 'Edm.String'},
    incomingContext: {type: 'graph.incomingContext'},
    participants: {type: 'graph.participant', collection: true, navigation: true},
    operations: {type: 'graph.commsOperation', collection: true, navigation: true}
  }
} as EntityConfig<Call>;