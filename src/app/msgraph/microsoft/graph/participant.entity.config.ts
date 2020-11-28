import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Participant } from './participant.entity';
import { ParticipantModel } from './participant.model';
import { ParticipantCollection } from './participant.collection';
//#endregion

export const ParticipantConfig = {
  name: "participant",
  base: "microsoft.graph.entity",
  model: ParticipantModel,
  collection: ParticipantCollection,
  annotations: [],
  fields: {
    info: {type: 'graph.participantInfo', nullable: false},
    isInLobby: {type: 'Edm.Boolean', nullable: false},
    isMuted: {type: 'Edm.Boolean', nullable: false},
    mediaStreams: {type: 'graph.mediaStream', collection: true},
    recordingInfo: {type: 'graph.recordingInfo'}
  }
} as StructuredTypeConfig<Participant>;