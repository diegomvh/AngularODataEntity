import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
//#endregion

export const GroupSettingTemplateConfig = {
  name: "GroupSettingTemplate",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    values: {type: 'graph.settingTemplateValue', nullable: false, collection: true}
  }
} as EntityConfig<GroupSettingTemplate>;