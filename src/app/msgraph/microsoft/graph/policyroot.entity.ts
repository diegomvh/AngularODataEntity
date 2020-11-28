import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { EntityModel } from './entity.model';
import { ActivityBasedTimeoutPolicyModel } from './activitybasedtimeoutpolicy.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { IdentitySecurityDefaultsEnforcementPolicyModel } from './identitysecuritydefaultsenforcementpolicy.model';
import { EntityCollection } from './entity.collection';
import { ActivityBasedTimeoutPolicyCollection } from './activitybasedtimeoutpolicy.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { IdentitySecurityDefaultsEnforcementPolicyCollection } from './identitysecuritydefaultsenforcementpolicy.collection';
//#endregion

export interface PolicyRoot extends Entity {
  //#region ODataApi Properties
  activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[];
  claimsMappingPolicies?: ClaimsMappingPolicy[];
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  conditionalAccessPolicies?: ConditionalAccessPolicy[];
  identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy;
  //#endregion
}