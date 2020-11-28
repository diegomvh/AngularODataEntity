import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParticipantEndpoint } from './participantendpoint.entity';
import { ParticipantEndpointModel } from './participantendpoint.model';
import { ParticipantEndpointCollection } from './participantendpoint.collection';
//#endregion

export const ParticipantEndpointConfig = {
  name: "participantEndpoint",
  base: "microsoft.graph.callRecords.endpoint",
  model: ParticipantEndpointModel,
  collection: ParticipantEndpointCollection,
  annotations: [],
  fields: {
    feedback: {type: 'microsoft.graph.callRecords.userFeedback'},
    identity: {type: 'graph.identitySet'}
  }
} as EntityConfig<ParticipantEndpoint>;