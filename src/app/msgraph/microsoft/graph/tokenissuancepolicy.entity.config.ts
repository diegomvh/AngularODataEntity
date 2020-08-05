import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
//#endregion

export const TokenIssuancePolicyConfig = {
  name: "tokenIssuancePolicy",
  base: "microsoft.graph.stsPolicy",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TokenIssuancePolicy>;