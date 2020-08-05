import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10CustomConfiguration } from './windows10customconfiguration.entity';
//#endregion

export const Windows10CustomConfigurationConfig = {
  name: "Windows10CustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<Windows10CustomConfiguration>;