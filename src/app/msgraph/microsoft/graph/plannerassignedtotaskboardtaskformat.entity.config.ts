import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignedToTaskBoardTaskFormat } from './plannerassignedtotaskboardtaskformat.entity';
//#endregion

export const PlannerAssignedToTaskBoardTaskFormatConfig = {
  name: "PlannerAssignedToTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    unassignedOrderHint: {type: 'Edm.String'},
    orderHintsByAssignee: {type: 'graph.plannerOrderHintsByAssignee'}
  }
} as EntityConfig<PlannerAssignedToTaskBoardTaskFormat>;