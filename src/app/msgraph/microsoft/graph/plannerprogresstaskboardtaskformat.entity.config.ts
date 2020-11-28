import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerProgressTaskBoardTaskFormat } from './plannerprogresstaskboardtaskformat.entity';
import { PlannerProgressTaskBoardTaskFormatModel } from './plannerprogresstaskboardtaskformat.model';
import { PlannerProgressTaskBoardTaskFormatCollection } from './plannerprogresstaskboardtaskformat.collection';
//#endregion

export const PlannerProgressTaskBoardTaskFormatConfig = {
  name: "plannerProgressTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  model: PlannerProgressTaskBoardTaskFormatModel,
  collection: PlannerProgressTaskBoardTaskFormatCollection,
  annotations: [],
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerProgressTaskBoardTaskFormat>;