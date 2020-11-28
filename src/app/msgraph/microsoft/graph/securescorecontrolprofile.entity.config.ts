import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { SecureScoreControlProfileModel } from './securescorecontrolprofile.model';
import { SecureScoreControlProfileCollection } from './securescorecontrolprofile.collection';
//#endregion

export const SecureScoreControlProfileConfig = {
  name: "secureScoreControlProfile",
  base: "microsoft.graph.entity",
  open: true,
  model: SecureScoreControlProfileModel,
  collection: SecureScoreControlProfileCollection,
  annotations: [],
  fields: {
    actionType: {type: 'Edm.String'},
    actionUrl: {type: 'Edm.String'},
    azureTenantId: {type: 'Edm.String', nullable: false},
    complianceInformation: {type: 'graph.complianceInformation', collection: true},
    controlCategory: {type: 'Edm.String'},
    controlStateUpdates: {type: 'graph.secureScoreControlStateUpdate', collection: true},
    deprecated: {type: 'Edm.Boolean'},
    implementationCost: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    maxScore: {type: 'Edm.Double'},
    rank: {type: 'Edm.Int32'},
    remediation: {type: 'Edm.String'},
    remediationImpact: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    threats: {type: 'Edm.String', collection: true},
    tier: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    userImpact: {type: 'Edm.String'},
    vendorInformation: {type: 'graph.securityVendorInformation'}
  }
} as StructuredTypeConfig<SecureScoreControlProfile>;