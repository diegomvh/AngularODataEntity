import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParticipantInfo } from './participantinfo.entity';
//#endregion

export const ParticipantInfoConfig = {
  name: "participantInfo",
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet', nullable: false},
    endpointType: {type: 'graph.endpointType'},
    region: {type: 'Edm.String'},
    languageId: {type: 'Edm.String'},
    countryCode: {type: 'Edm.String'}
  }
} as EntityConfig<ParticipantInfo>;