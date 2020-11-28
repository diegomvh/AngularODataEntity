import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10CustomConfiguration } from './windows10customconfiguration.entity';
import { Windows10CustomConfigurationModel } from './windows10customconfiguration.model';
import { Windows10CustomConfigurationCollection } from './windows10customconfiguration.collection';
//#endregion

export const Windows10CustomConfigurationConfig = {
  name: "windows10CustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows10CustomConfigurationModel,
  collection: Windows10CustomConfigurationCollection,
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<Windows10CustomConfiguration>;