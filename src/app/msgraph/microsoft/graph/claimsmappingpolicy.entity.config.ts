import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
import { ClaimsMappingPolicyCollection } from './claimsmappingpolicy.collection';
//#endregion

export const ClaimsMappingPolicyConfig = {
  name: "claimsMappingPolicy",
  base: "microsoft.graph.stsPolicy",
  model: ClaimsMappingPolicyModel,
  collection: ClaimsMappingPolicyCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ClaimsMappingPolicy>;