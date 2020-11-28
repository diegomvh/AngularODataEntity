import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourcePermission } from './resourcepermission.complex';
import { ResourcePermissionModel } from './resourcepermission.model';
import { ResourcePermissionCollection } from './resourcepermission.collection';
//#endregion

export const ResourcePermissionConfig = {
  name: "resourcePermission",
  model: ResourcePermissionModel,
  collection: ResourcePermissionCollection,
  annotations: [],
  fields: {
    type: {type: 'Edm.String', nullable: false},
    value: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<ResourcePermission>;