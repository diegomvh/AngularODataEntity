import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingSource } from './settingsource.entity';
import { SettingSourceModel } from './settingsource.model';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export const SettingSourceConfig = {
  name: "settingSource",
  model: SettingSourceModel,
  collection: SettingSourceCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'}
  }
} as EntityConfig<SettingSource>;