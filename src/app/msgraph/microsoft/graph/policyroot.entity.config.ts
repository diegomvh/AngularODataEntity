import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyRoot } from './policyroot.entity';
//#endregion

export const PolicyRootConfig = {
  name: "PolicyRoot",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    activityBasedTimeoutPolicies: {type: 'graph.activityBasedTimeoutPolicy', collection: true, navigation: true},
    claimsMappingPolicies: {type: 'graph.claimsMappingPolicy', collection: true, navigation: true},
    homeRealmDiscoveryPolicies: {type: 'graph.homeRealmDiscoveryPolicy', collection: true, navigation: true},
    tokenIssuancePolicies: {type: 'graph.tokenIssuancePolicy', collection: true, navigation: true},
    tokenLifetimePolicies: {type: 'graph.tokenLifetimePolicy', collection: true, navigation: true},
    identitySecurityDefaultsEnforcementPolicy: {type: 'graph.identitySecurityDefaultsEnforcementPolicy', navigation: true},
    conditionalAccessPolicies: {type: 'graph.conditionalAccessPolicy', collection: true, navigation: true}
  }
} as EntityConfig<PolicyRoot>;