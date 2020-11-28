import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
import { GroupSettingTemplateModel } from './groupsettingtemplate.model';
import { GroupSettingTemplateCollection } from './groupsettingtemplate.collection';
//#endregion

export const GroupSettingTemplateConfig = {
  name: "groupSettingTemplate",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: GroupSettingTemplateModel,
  collection: GroupSettingTemplateCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    values: {type: 'graph.settingTemplateValue', nullable: false, collection: true}
  }
} as EntityConfig<GroupSettingTemplate>;