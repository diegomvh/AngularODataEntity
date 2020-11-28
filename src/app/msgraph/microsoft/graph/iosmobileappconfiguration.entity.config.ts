import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMobileAppConfiguration } from './iosmobileappconfiguration.entity';
import { IosMobileAppConfigurationModel } from './iosmobileappconfiguration.model';
import { IosMobileAppConfigurationCollection } from './iosmobileappconfiguration.collection';
//#endregion

export const IosMobileAppConfigurationConfig = {
  name: "iosMobileAppConfiguration",
  base: "microsoft.graph.managedDeviceMobileAppConfiguration",
  model: IosMobileAppConfigurationModel,
  collection: IosMobileAppConfigurationCollection,
  annotations: [],
  fields: {
    encodedSettingXml: {type: 'Edm.Binary'},
    settings: {type: 'graph.appConfigurationSettingItem', collection: true}
  }
} as EntityConfig<IosMobileAppConfiguration>;