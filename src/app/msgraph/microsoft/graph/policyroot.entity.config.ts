import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyRoot } from './policyroot.entity';
import { PolicyRootModel } from './policyroot.model';
import { PolicyRootCollection } from './policyroot.collection';
//#endregion

export const PolicyRootConfig = {
  name: "policyRoot",
  base: "microsoft.graph.entity",
  model: PolicyRootModel,
  collection: PolicyRootCollection,
  annotations: [],
  fields: {
    activityBasedTimeoutPolicies: {type: 'graph.activityBasedTimeoutPolicy', collection: true, navigation: true},
    claimsMappingPolicies: {type: 'graph.claimsMappingPolicy', collection: true, navigation: true},
    homeRealmDiscoveryPolicies: {type: 'graph.homeRealmDiscoveryPolicy', collection: true, navigation: true},
    tokenIssuancePolicies: {type: 'graph.tokenIssuancePolicy', collection: true, navigation: true},
    tokenLifetimePolicies: {type: 'graph.tokenLifetimePolicy', collection: true, navigation: true},
    conditionalAccessPolicies: {type: 'graph.conditionalAccessPolicy', collection: true, navigation: true},
    identitySecurityDefaultsEnforcementPolicy: {type: 'graph.identitySecurityDefaultsEnforcementPolicy', navigation: true}
  }
} as EntityConfig<PolicyRoot>;