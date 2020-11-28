import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
import { PolicyBaseModel } from './policybase.model';
import { PolicyBaseCollection } from './policybase.collection';
//#endregion

export const PolicyBaseConfig = {
  name: "policyBase",
  base: "microsoft.graph.directoryObject",
  model: PolicyBaseModel,
  collection: PolicyBaseCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PolicyBase>;