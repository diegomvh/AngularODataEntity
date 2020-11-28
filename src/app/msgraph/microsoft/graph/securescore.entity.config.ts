import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecureScore } from './securescore.entity';
import { SecureScoreModel } from './securescore.model';
import { SecureScoreCollection } from './securescore.collection';
//#endregion

export const SecureScoreConfig = {
  name: "secureScore",
  base: "microsoft.graph.entity",
  open: true,
  model: SecureScoreModel,
  collection: SecureScoreCollection,
  annotations: [],
  fields: {
    activeUserCount: {type: 'Edm.Int32'},
    averageComparativeScores: {type: 'graph.averageComparativeScore', collection: true},
    azureTenantId: {type: 'Edm.String', nullable: false},
    controlScores: {type: 'graph.controlScore', collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    currentScore: {type: 'Edm.Double'},
    enabledServices: {type: 'Edm.String', collection: true},
    licensedUserCount: {type: 'Edm.Int32'},
    maxScore: {type: 'Edm.Double'},
    vendorInformation: {type: 'graph.securityVendorInformation'}
  }
} as StructuredTypeConfig<SecureScore>;