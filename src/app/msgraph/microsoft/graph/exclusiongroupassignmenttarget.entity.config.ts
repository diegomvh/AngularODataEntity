import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExclusionGroupAssignmentTarget } from './exclusiongroupassignmenttarget.entity';
import { ExclusionGroupAssignmentTargetModel } from './exclusiongroupassignmenttarget.model';
import { ExclusionGroupAssignmentTargetCollection } from './exclusiongroupassignmenttarget.collection';
//#endregion

export const ExclusionGroupAssignmentTargetConfig = {
  name: "exclusionGroupAssignmentTarget",
  base: "microsoft.graph.groupAssignmentTarget",
  model: ExclusionGroupAssignmentTargetModel,
  collection: ExclusionGroupAssignmentTargetCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ExclusionGroupAssignmentTarget>;