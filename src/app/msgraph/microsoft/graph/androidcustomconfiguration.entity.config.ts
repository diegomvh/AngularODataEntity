import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidCustomConfiguration } from './androidcustomconfiguration.entity';
//#endregion

export const AndroidCustomConfigurationConfig = {
  name: "androidCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<AndroidCustomConfiguration>;