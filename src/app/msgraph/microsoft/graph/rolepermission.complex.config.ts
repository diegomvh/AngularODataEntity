import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RolePermission } from './rolepermission.complex';
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
} as StructuredTypeConfig<RolePermission>;