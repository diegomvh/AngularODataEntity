import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingValue } from './settingvalue.complex';
import { SettingValueModel } from './settingvalue.model';
import { SettingValueCollection } from './settingvalue.collection';
//#endregion

export const SettingValueConfig = {
  name: "settingValue",
  model: SettingValueModel,
  collection: SettingValueCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SettingValue>;