import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { PolicyRoot } from './policyroot.entity';
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { ActivityBasedTimeoutPolicyModel } from './activitybasedtimeoutpolicy.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { IdentitySecurityDefaultsEnforcementPolicyModel } from './identitysecuritydefaultsenforcementpolicy.model';
import { ActivityBasedTimeoutPolicyCollection } from './activitybasedtimeoutpolicy.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
import { PolicyRootCollection } from './policyroot.collection';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
import { IdentitySecurityDefaultsEnforcementPolicyCollection } from './identitysecuritydefaultsenforcementpolicy.collection';
//#endregion

export class PolicyRootModel<E extends PolicyRoot> extends EntityModel<E> {
  //#region ODataApi Properties
  activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicyCollection<ActivityBasedTimeoutPolicy, ActivityBasedTimeoutPolicyModel<ActivityBasedTimeoutPolicy>>;
  claimsMappingPolicies?: ClaimsMappingPolicyCollection<ClaimsMappingPolicy, ClaimsMappingPolicyModel<ClaimsMappingPolicy>>;
  homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicyCollection<HomeRealmDiscoveryPolicy, HomeRealmDiscoveryPolicyModel<HomeRealmDiscoveryPolicy>>;
  tokenIssuancePolicies?: TokenIssuancePolicyCollection<TokenIssuancePolicy, TokenIssuancePolicyModel<TokenIssuancePolicy>>;
  tokenLifetimePolicies?: TokenLifetimePolicyCollection<TokenLifetimePolicy, TokenLifetimePolicyModel<TokenLifetimePolicy>>;
  conditionalAccessPolicies?: ConditionalAccessPolicyCollection<ConditionalAccessPolicy, ConditionalAccessPolicyModel<ConditionalAccessPolicy>>;
  identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicyModel<IdentitySecurityDefaultsEnforcementPolicy>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}