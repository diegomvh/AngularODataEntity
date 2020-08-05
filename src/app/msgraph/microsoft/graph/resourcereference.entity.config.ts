import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.entity';
//#endregion

export const ResourceReferenceConfig = {
  name: "resourceReference",
  annotations: [],
  fields: {
    webUrl: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceReference>;