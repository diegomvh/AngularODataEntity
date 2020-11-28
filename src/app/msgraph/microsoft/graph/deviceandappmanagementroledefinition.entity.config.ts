import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementRoleDefinition } from './deviceandappmanagementroledefinition.entity';
import { DeviceAndAppManagementRoleDefinitionModel } from './deviceandappmanagementroledefinition.model';
import { DeviceAndAppManagementRoleDefinitionCollection } from './deviceandappmanagementroledefinition.collection';
//#endregion

export const DeviceAndAppManagementRoleDefinitionConfig = {
  name: "deviceAndAppManagementRoleDefinition",
  base: "microsoft.graph.roleDefinition",
  model: DeviceAndAppManagementRoleDefinitionModel,
  collection: DeviceAndAppManagementRoleDefinitionCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<DeviceAndAppManagementRoleDefinition>;