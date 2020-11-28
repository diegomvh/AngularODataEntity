import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingSource } from './settingsource.complex';
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
} as StructuredTypeConfig<SettingSource>;