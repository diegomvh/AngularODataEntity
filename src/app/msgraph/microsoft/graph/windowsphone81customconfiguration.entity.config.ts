import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsPhone81CustomConfiguration } from './windowsphone81customconfiguration.entity';
//#endregion

export const WindowsPhone81CustomConfigurationConfig = {
  name: "WindowsPhone81CustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<WindowsPhone81CustomConfiguration>;