import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
//#endregion

export const TokenIssuancePolicyConfig = {
  name: "tokenIssuancePolicy",
  base: "microsoft.graph.stsPolicy",
  model: TokenIssuancePolicyModel,
  collection: TokenIssuancePolicyCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<TokenIssuancePolicy>;