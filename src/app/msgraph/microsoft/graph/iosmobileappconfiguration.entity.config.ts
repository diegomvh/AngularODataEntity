import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMobileAppConfiguration } from './iosmobileappconfiguration.entity';
//#endregion

export const IosMobileAppConfigurationConfig = {
  name: "iosMobileAppConfiguration",
  base: "microsoft.graph.managedDeviceMobileAppConfiguration",
  annotations: [],
  fields: {
    encodedSettingXml: {type: 'Edm.Binary'},
    settings: {type: 'graph.appConfigurationSettingItem', collection: true}
  }
} as EntityConfig<IosMobileAppConfiguration>;