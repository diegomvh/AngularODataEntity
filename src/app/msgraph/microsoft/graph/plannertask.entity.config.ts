import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerTask } from './plannertask.entity';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export const PlannerTaskConfig = {
  name: "plannerTask",
  base: "microsoft.graph.entity",
  model: PlannerTaskModel,
  collection: PlannerTaskCollection,
  annotations: [],
  fields: {
    activeChecklistItemCount: {type: 'Edm.Int32'},
    appliedCategories: {type: 'graph.plannerAppliedCategories'},
    assigneePriority: {type: 'Edm.String'},
    assignments: {type: 'graph.plannerAssignments'},
    bucketId: {type: 'Edm.String'},
    checklistItemCount: {type: 'Edm.Int32'},
    completedBy: {type: 'graph.identitySet'},
    completedDateTime: {type: 'Edm.DateTimeOffset'},
    conversationThreadId: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    dueDateTime: {type: 'Edm.DateTimeOffset'},
    hasDescription: {type: 'Edm.Boolean'},
    orderHint: {type: 'Edm.String'},
    percentComplete: {type: 'Edm.Int32'},
    planId: {type: 'Edm.String'},
    previewType: {type: 'graph.plannerPreviewType'},
    referenceCount: {type: 'Edm.Int32'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    title: {type: 'Edm.String', nullable: false},
    assignedToTaskBoardFormat: {type: 'graph.plannerAssignedToTaskBoardTaskFormat', navigation: true},
    bucketTaskBoardFormat: {type: 'graph.plannerBucketTaskBoardTaskFormat', navigation: true},
    details: {type: 'graph.plannerTaskDetails', navigation: true},
    progressTaskBoardFormat: {type: 'graph.plannerProgressTaskBoardTaskFormat', navigation: true}
  }
} as StructuredTypeConfig<PlannerTask>;