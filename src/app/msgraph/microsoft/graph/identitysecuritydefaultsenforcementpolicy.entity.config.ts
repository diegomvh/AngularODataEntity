import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySecurityDefaultsEnforcementPolicy } from './identitysecuritydefaultsenforcementpolicy.entity';
//#endregion

export const IdentitySecurityDefaultsEnforcementPolicyConfig = {
  name: "identitySecurityDefaultsEnforcementPolicy",
  base: "microsoft.graph.policyBase",
  annotations: [],
  fields: {
    isEnabled: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IdentitySecurityDefaultsEnforcementPolicy>;