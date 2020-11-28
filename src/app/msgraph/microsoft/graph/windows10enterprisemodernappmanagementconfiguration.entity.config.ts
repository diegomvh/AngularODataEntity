import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EnterpriseModernAppManagementConfiguration } from './windows10enterprisemodernappmanagementconfiguration.entity';
import { Windows10EnterpriseModernAppManagementConfigurationModel } from './windows10enterprisemodernappmanagementconfiguration.model';
import { Windows10EnterpriseModernAppManagementConfigurationCollection } from './windows10enterprisemodernappmanagementconfiguration.collection';
//#endregion

export const Windows10EnterpriseModernAppManagementConfigurationConfig = {
  name: "windows10EnterpriseModernAppManagementConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows10EnterpriseModernAppManagementConfigurationModel,
  collection: Windows10EnterpriseModernAppManagementConfigurationCollection,
  annotations: [],
  fields: {
    uninstallBuiltInApps: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10EnterpriseModernAppManagementConfiguration>;