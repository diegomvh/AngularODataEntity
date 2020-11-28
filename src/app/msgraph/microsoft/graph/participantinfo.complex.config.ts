import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParticipantInfo } from './participantinfo.complex';
import { ParticipantInfoModel } from './participantinfo.model';
import { ParticipantInfoCollection } from './participantinfo.collection';
//#endregion

export const ParticipantInfoConfig = {
  name: "participantInfo",
  model: ParticipantInfoModel,
  collection: ParticipantInfoCollection,
  annotations: [],
  fields: {
    countryCode: {type: 'Edm.String'},
    endpointType: {type: 'graph.endpointType'},
    identity: {type: 'graph.identitySet', nullable: false},
    languageId: {type: 'Edm.String'},
    region: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ParticipantInfo>;