import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RolePermission } from './rolepermission.entity';
import { RolePermissionModel } from './rolepermission.model';
import { RolePermissionCollection } from './rolepermission.collection';
//#endregion

export const RolePermissionConfig = {
  name: "rolePermission",
  model: RolePermissionModel,
  collection: RolePermissionCollection,
  annotations: [],
  fields: {
    resourceActions: {type: 'graph.resourceAction', collection: true}
  }
} as EntityConfig<RolePermission>;