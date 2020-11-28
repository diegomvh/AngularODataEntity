import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
import { IdentitySecurityDefaultsEnforcementPolicyModel } from './identitysecuritydefaultsenforcementpolicy.model';
import { IdentitySecurityDefaultsEnforcementPolicyCollection } from './identitysecuritydefaultsenforcementpolicy.collection';
//#endregion

export const IdentitySecurityDefaultsEnforcementPolicyConfig = {
  name: "identitySecurityDefaultsEnforcementPolicy",
  base: "microsoft.graph.policyBase",
  model: IdentitySecurityDefaultsEnforcementPolicyModel,
  collection: IdentitySecurityDefaultsEnforcementPolicyCollection,
  annotations: [],
  fields: {
    isEnabled: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IdentitySecurityDefaultsEnforcementPolicy>;