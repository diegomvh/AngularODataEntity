import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.entity';
import { AppConfigurationSettingItemModel } from './appconfigurationsettingitem.model';
import { AppConfigurationSettingItemCollection } from './appconfigurationsettingitem.collection';
//#endregion

export const AppConfigurationSettingItemConfig = {
  name: "appConfigurationSettingItem",
  model: AppConfigurationSettingItemModel,
  collection: AppConfigurationSettingItemCollection,
  annotations: [],
  fields: {
    appConfigKey: {type: 'Edm.String', nullable: false},
    appConfigKeyType: {type: 'graph.mdmAppConfigKeyType', nullable: false},
    appConfigKeyValue: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<AppConfigurationSettingItem>;