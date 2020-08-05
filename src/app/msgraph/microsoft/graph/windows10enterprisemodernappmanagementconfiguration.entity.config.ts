import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EnterpriseModernAppManagementConfiguration } from './windows10enterprisemodernappmanagementconfiguration.entity';
//#endregion

export const Windows10EnterpriseModernAppManagementConfigurationConfig = {
  name: "Windows10EnterpriseModernAppManagementConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    uninstallBuiltInApps: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10EnterpriseModernAppManagementConfiguration>;