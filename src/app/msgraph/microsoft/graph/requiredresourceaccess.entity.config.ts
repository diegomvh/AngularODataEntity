import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequiredResourceAccess } from './requiredresourceaccess.entity';
//#endregion

export const RequiredResourceAccessConfig = {
  name: "requiredResourceAccess",
  annotations: [],
  fields: {
    resourceAppId: {type: 'Edm.String', nullable: false},
    resourceAccess: {type: 'graph.resourceAccess', nullable: false, collection: true}
  }
} as EntityConfig<RequiredResourceAccess>;