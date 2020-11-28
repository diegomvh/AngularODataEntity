import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { PermissionGrantPolicy } from './permissiongrantpolicy.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { EntityModel } from './entity.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { ActivityBasedTimeoutPolicyModel } from './activitybasedtimeoutpolicy.model';
import { PermissionGrantPolicyModel } from './permissiongrantpolicy.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { IdentitySecurityDefaultsEnforcementPolicyModel } from './identitysecuritydefaultsenforcementpolicy.model';
import { EntityCollection } from './entity.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
import { ActivityBasedTimeoutPolicyCollection } from './activitybasedtimeoutpolicy.collection';
import { PermissionGrantPolicyCollection } from './permissiongrantpolicy.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { IdentitySecurityDefaultsEnforcementPolicyCollection } from './identitysecuritydefaultsenforcementpolicy.collection';
//#endregion

export interface PolicyRoot extends Entity {
  //#region ODataApi Properties
  activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[];
  claimsMappingPolicies?: ClaimsMappingPolicy[];
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  permissionGrantPolicies?: PermissionGrantPolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  conditionalAccessPolicies?: ConditionalAccessPolicy[];
  identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy;
  //#endregion
}