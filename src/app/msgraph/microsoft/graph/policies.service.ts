import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
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
import { PolicyRootModel } from './policyroot.model';
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

@Injectable()
export class PoliciesService extends ODataSingletonService<PolicyRoot> {
  constructor(protected client: ODataClient) {
    super(client, 'policies', 'microsoft.graph.policyRoot');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}