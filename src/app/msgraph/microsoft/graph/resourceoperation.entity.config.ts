import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceOperation } from './resourceoperation.entity';
//#endregion

export const ResourceOperationConfig = {
  name: "resourceOperation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    resourceName: {type: 'Edm.String'},
    actionName: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceOperation>;