import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SchedulingGroup } from './schedulinggroup.entity';
//#endregion

export const SchedulingGroupConfig = {
  name: "schedulingGroup",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    isActive: {type: 'Edm.Boolean'},
    userIds: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<SchedulingGroup>;