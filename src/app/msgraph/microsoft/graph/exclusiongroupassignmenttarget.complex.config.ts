import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExclusionGroupAssignmentTarget } from './exclusiongroupassignmenttarget.complex';
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
} as StructuredTypeConfig<ExclusionGroupAssignmentTarget>;