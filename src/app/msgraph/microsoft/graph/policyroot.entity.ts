import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
//#endregion

export interface PolicyRoot extends Entity {
  //#region ODataApi Properties
  activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[];
  claimsMappingPolicies?: ClaimsMappingPolicy[];
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy;
  conditionalAccessPolicies?: ConditionalAccessPolicy[];
  //#endregion
}