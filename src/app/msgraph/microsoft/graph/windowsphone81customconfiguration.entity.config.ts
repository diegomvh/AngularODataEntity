import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsPhone81CustomConfiguration } from './windowsphone81customconfiguration.entity';
import { WindowsPhone81CustomConfigurationModel } from './windowsphone81customconfiguration.model';
import { WindowsPhone81CustomConfigurationCollection } from './windowsphone81customconfiguration.collection';
//#endregion

export const WindowsPhone81CustomConfigurationConfig = {
  name: "windowsPhone81CustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: WindowsPhone81CustomConfigurationModel,
  collection: WindowsPhone81CustomConfigurationCollection,
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as StructuredTypeConfig<WindowsPhone81CustomConfiguration>;