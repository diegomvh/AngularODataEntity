import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupSetting } from './groupsetting.entity';
//#endregion

export const GroupSettingConfig = {
  name: "groupSetting",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    templateId: {type: 'Edm.String'},
    values: {type: 'graph.settingValue', nullable: false, collection: true}
  }
} as EntityConfig<GroupSetting>;