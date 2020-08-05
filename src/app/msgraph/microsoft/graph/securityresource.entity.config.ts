import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResource } from './securityresource.entity';
//#endregion

export const SecurityResourceConfig = {
  name: "SecurityResource",
  annotations: [],
  fields: {
    resource: {type: 'Edm.String'},
    resourceType: {type: 'graph.securityResourceType'}
  }
} as EntityConfig<SecurityResource>;