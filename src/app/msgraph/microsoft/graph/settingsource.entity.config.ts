import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingSource } from './settingsource.entity';
//#endregion

export const SettingSourceConfig = {
  name: "SettingSource",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<SettingSource>;