import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IncomingContext } from './incomingcontext.entity';
//#endregion

export const IncomingContextConfig = {
  name: "IncomingContext",
  annotations: [],
  fields: {
    sourceParticipantId: {type: 'Edm.String'},
    observedParticipantId: {type: 'Edm.String'},
    onBehalfOf: {type: 'graph.identitySet'},
    transferor: {type: 'graph.identitySet'}
  }
} as EntityConfig<IncomingContext>;