import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResource } from './securityresource.entity';
//#endregion

export const SecurityResourceConfig = {
  name: "securityResource",
  annotations: [],
  fields: {
    resource: {type: 'Edm.String'},
    resourceType: {type: 'graph.securityResourceType'}
  }
} as EntityConfig<SecurityResource>;