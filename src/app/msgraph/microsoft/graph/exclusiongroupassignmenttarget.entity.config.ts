import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExclusionGroupAssignmentTarget } from './exclusiongroupassignmenttarget.entity';
//#endregion

export const ExclusionGroupAssignmentTargetConfig = {
  name: "ExclusionGroupAssignmentTarget",
  base: "microsoft.graph.groupAssignmentTarget",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ExclusionGroupAssignmentTarget>;