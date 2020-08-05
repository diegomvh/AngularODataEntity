import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.entity';
//#endregion

export const AppConfigurationSettingItemConfig = {
  name: "AppConfigurationSettingItem",
  annotations: [],
  fields: {
    appConfigKey: {type: 'Edm.String', nullable: false},
    appConfigKeyType: {type: 'graph.mdmAppConfigKeyType', nullable: false},
    appConfigKeyValue: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<AppConfigurationSettingItem>;