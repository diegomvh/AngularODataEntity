import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidWorkProfileCustomConfiguration } from './androidworkprofilecustomconfiguration.entity';
import { AndroidWorkProfileCustomConfigurationModel } from './androidworkprofilecustomconfiguration.model';
import { AndroidWorkProfileCustomConfigurationCollection } from './androidworkprofilecustomconfiguration.collection';
//#endregion

export const AndroidWorkProfileCustomConfigurationConfig = {
  name: "androidWorkProfileCustomConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: AndroidWorkProfileCustomConfigurationModel,
  collection: AndroidWorkProfileCustomConfigurationCollection,
  annotations: [],
  fields: {
    omaSettings: {type: 'graph.omaSetting', collection: true}
  }
} as EntityConfig<AndroidWorkProfileCustomConfiguration>;