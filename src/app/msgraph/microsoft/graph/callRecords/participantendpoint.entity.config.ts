import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParticipantEndpoint } from './participantendpoint.entity';
//#endregion

export const ParticipantEndpointConfig = {
  name: "ParticipantEndpoint",
  base: "microsoft.graph.callRecords.endpoint",
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet'},
    feedback: {type: 'microsoft.graph.callRecords.userFeedback'}
  }
} as EntityConfig<ParticipantEndpoint>;