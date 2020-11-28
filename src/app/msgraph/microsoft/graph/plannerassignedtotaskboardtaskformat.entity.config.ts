import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
import { PlannerAssignedToTaskBoardTaskFormatModel } from './plannerassignedtotaskboardtaskformat.model';
import { PlannerAssignedToTaskBoardTaskFormatCollection } from './plannerassignedtotaskboardtaskformat.collection';
//#endregion

export const PlannerAssignedToTaskBoardTaskFormatConfig = {
  name: "plannerAssignedToTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  model: PlannerAssignedToTaskBoardTaskFormatModel,
  collection: PlannerAssignedToTaskBoardTaskFormatCollection,
  annotations: [],
  fields: {
    orderHintsByAssignee: {type: 'graph.plannerOrderHintsByAssignee'},
    unassignedOrderHint: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerAssignedToTaskBoardTaskFormat>;