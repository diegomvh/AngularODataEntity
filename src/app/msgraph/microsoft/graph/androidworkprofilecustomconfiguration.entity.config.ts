import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidWorkProfileCustomConfiguration } from './androidworkprofilecustomconfiguration.entity';
//#endregion

export const AndroidWorkProfileCustomConfigurationConfig = {
  name: "AndroidWorkProfileCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<AndroidWorkProfileCustomConfiguration>;