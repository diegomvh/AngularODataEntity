import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
//#endregion

export const PlannerProgressTaskBoardTaskFormatConfig = {
  name: "plannerProgressTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerProgressTaskBoardTaskFormat>;