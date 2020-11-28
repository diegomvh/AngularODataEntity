import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupAssignmentTarget } from './groupassignmenttarget.entity';
import { GroupAssignmentTargetModel } from './groupassignmenttarget.model';
import { GroupAssignmentTargetCollection } from './groupassignmenttarget.collection';
//#endregion

export const GroupAssignmentTargetConfig = {
  name: "groupAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  model: GroupAssignmentTargetModel,
  collection: GroupAssignmentTargetCollection,
  annotations: [],
  fields: {
    groupId: {type: 'Edm.String'}
  }
} as EntityConfig<GroupAssignmentTarget>;