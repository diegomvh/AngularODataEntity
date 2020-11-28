import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.entity';
import { ResourceAccessModel } from './resourceaccess.model';
import { ResourceAccessCollection } from './resourceaccess.collection';
//#endregion

export const ResourceAccessConfig = {
  name: "resourceAccess",
  model: ResourceAccessModel,
  collection: ResourceAccessCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Guid', nullable: false},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceAccess>;