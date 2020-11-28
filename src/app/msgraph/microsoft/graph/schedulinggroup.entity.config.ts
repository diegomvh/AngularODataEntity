import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SchedulingGroup } from './schedulinggroup.entity';
import { SchedulingGroupModel } from './schedulinggroup.model';
import { SchedulingGroupCollection } from './schedulinggroup.collection';
//#endregion

export const SchedulingGroupConfig = {
  name: "schedulingGroup",
  base: "microsoft.graph.changeTrackedEntity",
  model: SchedulingGroupModel,
  collection: SchedulingGroupCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    isActive: {type: 'Edm.Boolean'},
    userIds: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<SchedulingGroup>;