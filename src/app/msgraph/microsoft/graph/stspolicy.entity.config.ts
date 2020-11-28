import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { StsPolicy } from './stspolicy.entity';
import { StsPolicyModel } from './stspolicy.model';
import { StsPolicyCollection } from './stspolicy.collection';
//#endregion

export const StsPolicyConfig = {
  name: "stsPolicy",
  base: "microsoft.graph.policyBase",
  model: StsPolicyModel,
  collection: StsPolicyCollection,
  annotations: [],
  fields: {
    definition: {type: 'Edm.String', nullable: false, collection: true},
    isOrganizationDefault: {type: 'Edm.Boolean'},
    appliesTo: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<StsPolicy>;