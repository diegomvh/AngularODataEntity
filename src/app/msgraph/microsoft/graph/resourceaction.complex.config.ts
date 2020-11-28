import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.complex';
import { ResourceActionModel } from './resourceaction.model';
import { ResourceActionCollection } from './resourceaction.collection';
//#endregion

export const ResourceActionConfig = {
  name: "resourceAction",
  model: ResourceActionModel,
  collection: ResourceActionCollection,
  annotations: [],
  fields: {
    allowedResourceActions: {type: 'Edm.String', collection: true},
    notAllowedResourceActions: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<ResourceAction>;