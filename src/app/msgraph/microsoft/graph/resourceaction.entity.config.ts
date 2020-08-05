import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
//#endregion

export const ResourceActionConfig = {
  name: "ResourceAction",
  annotations: [],
  fields: {
    allowedResourceActions: {type: 'Edm.String', collection: true},
    notAllowedResourceActions: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<ResourceAction>;