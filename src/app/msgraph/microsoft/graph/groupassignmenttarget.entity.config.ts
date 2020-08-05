﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GroupAssignmentTarget } from './groupassignmenttarget.entity';
//#endregion

export const GroupAssignmentTargetConfig = {
  name: "GroupAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  annotations: [],
  fields: {
    groupId: {type: 'Edm.String'}
  }
} as EntityConfig<GroupAssignmentTarget>;