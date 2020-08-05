import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
//#endregion

export const PlannerBucketTaskBoardTaskFormatConfig = {
  name: "plannerBucketTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerBucketTaskBoardTaskFormat>;