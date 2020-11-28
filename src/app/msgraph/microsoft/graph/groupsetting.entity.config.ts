import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupSetting } from './groupsetting.entity';
import { GroupSettingModel } from './groupsetting.model';
import { GroupSettingCollection } from './groupsetting.collection';
//#endregion

export const GroupSettingConfig = {
  name: "groupSetting",
  base: "microsoft.graph.entity",
  open: true,
  model: GroupSettingModel,
  collection: GroupSettingCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    templateId: {type: 'Edm.String'},
    values: {type: 'graph.settingValue', nullable: false, collection: true}
  }
} as EntityConfig<GroupSetting>;