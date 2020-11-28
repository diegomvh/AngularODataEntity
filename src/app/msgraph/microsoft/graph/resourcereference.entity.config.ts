import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.entity';
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
} as EntityConfig<ResourceReference>;