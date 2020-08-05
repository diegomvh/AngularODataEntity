import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.entity';
//#endregion

export const ResourceAccessConfig = {
  name: "ResourceAccess",
  annotations: [],
  fields: {
    id: {type: 'Edm.Guid', nullable: false},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<ResourceAccess>;