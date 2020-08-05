import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementRoleDefinition } from './deviceandappmanagementroledefinition.entity';
//#endregion

export const DeviceAndAppManagementRoleDefinitionConfig = {
  name: "DeviceAndAppManagementRoleDefinition",
  base: "microsoft.graph.roleDefinition",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<DeviceAndAppManagementRoleDefinition>;