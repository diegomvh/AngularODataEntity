import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
//#endregion

export const HomeRealmDiscoveryPolicyConfig = {
  name: "HomeRealmDiscoveryPolicy",
  base: "microsoft.graph.stsPolicy",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<HomeRealmDiscoveryPolicy>;