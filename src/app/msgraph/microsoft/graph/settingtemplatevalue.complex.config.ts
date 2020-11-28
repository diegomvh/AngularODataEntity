import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingTemplateValue } from './settingtemplatevalue.complex';
import { SettingTemplateValueModel } from './settingtemplatevalue.model';
import { SettingTemplateValueCollection } from './settingtemplatevalue.collection';
//#endregion

export const SettingTemplateValueConfig = {
  name: "settingTemplateValue",
  model: SettingTemplateValueModel,
  collection: SettingTemplateValueCollection,
  annotations: [],
  fields: {
    defaultValue: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SettingTemplateValue>;