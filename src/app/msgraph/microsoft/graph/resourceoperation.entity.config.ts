import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceOperation } from './resourceoperation.entity';
import { ResourceOperationModel } from './resourceoperation.model';
import { ResourceOperationCollection } from './resourceoperation.collection';
//#endregion

export const ResourceOperationConfig = {
  name: "resourceOperation",
  base: "microsoft.graph.entity",
  model: ResourceOperationModel,
  collection: ResourceOperationCollection,
  annotations: [],
  fields: {
    actionName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    resourceName: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceOperation>;