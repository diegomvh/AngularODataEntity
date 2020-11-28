import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidCustomConfiguration } from './androidcustomconfiguration.entity';
import { AndroidCustomConfigurationModel } from './androidcustomconfiguration.model';
import { AndroidCustomConfigurationCollection } from './androidcustomconfiguration.collection';
//#endregion

export const AndroidCustomConfigurationConfig = {
  name: "androidCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: AndroidCustomConfigurationModel,
  collection: AndroidCustomConfigurationCollection,
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<AndroidCustomConfiguration>;