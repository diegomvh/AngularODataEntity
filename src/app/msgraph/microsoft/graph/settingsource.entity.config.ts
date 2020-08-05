import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingSource } from './settingsource.entity';
//#endregion

export const SettingSourceConfig = {
  name: "settingSource",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<SettingSource>;