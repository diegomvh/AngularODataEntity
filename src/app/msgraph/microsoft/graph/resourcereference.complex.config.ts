import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.complex';
import { ResourceReferenceModel } from './resourcereference.model';
import { ResourceReferenceCollection } from './resourcereference.collection';
//#endregion

export const ResourceReferenceConfig = {
  name: "resourceReference",
  model: ResourceReferenceModel,
  collection: ResourceReferenceCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceReference>;