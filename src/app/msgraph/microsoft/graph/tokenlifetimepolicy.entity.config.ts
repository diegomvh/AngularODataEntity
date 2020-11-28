import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
//#endregion

export const TokenLifetimePolicyConfig = {
  name: "tokenLifetimePolicy",
  base: "microsoft.graph.stsPolicy",
  model: TokenLifetimePolicyModel,
  collection: TokenLifetimePolicyCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TokenLifetimePolicy>;