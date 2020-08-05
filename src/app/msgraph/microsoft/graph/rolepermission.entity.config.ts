import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RolePermission } from './rolepermission.entity';
//#endregion

export const RolePermissionConfig = {
  name: "RolePermission",
  annotations: [],
  fields: {
    resourceActions: {type: 'graph.resourceAction', collection: true}
  }
} as EntityConfig<RolePermission>;