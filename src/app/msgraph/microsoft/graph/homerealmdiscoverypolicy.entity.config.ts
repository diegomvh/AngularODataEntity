import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
//#endregion

export const HomeRealmDiscoveryPolicyConfig = {
  name: "homeRealmDiscoveryPolicy",
  base: "microsoft.graph.stsPolicy",
  model: HomeRealmDiscoveryPolicyModel,
  collection: HomeRealmDiscoveryPolicyCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<HomeRealmDiscoveryPolicy>;