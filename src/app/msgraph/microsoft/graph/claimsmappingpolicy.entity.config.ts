import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
//#endregion

export const ClaimsMappingPolicyConfig = {
  name: "ClaimsMappingPolicy",
  base: "microsoft.graph.stsPolicy",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ClaimsMappingPolicy>;