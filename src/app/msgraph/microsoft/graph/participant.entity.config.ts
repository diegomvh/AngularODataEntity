import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Participant } from './participant.entity';
//#endregion

export const ParticipantConfig = {
  name: "participant",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    info: {type: 'graph.participantInfo', nullable: false},
    recordingInfo: {type: 'graph.recordingInfo'},
    mediaStreams: {type: 'graph.mediaStream', collection: true},
    isMuted: {type: 'Edm.Boolean', nullable: false},
    isInLobby: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Participant>;