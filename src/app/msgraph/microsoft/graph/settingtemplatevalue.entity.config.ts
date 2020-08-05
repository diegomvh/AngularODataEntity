import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingTemplateValue } from './settingtemplatevalue.entity';
//#endregion

export const SettingTemplateValueConfig = {
  name: "settingTemplateValue",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    defaultValue: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as EntityConfig<SettingTemplateValue>;