import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormatModel } from './plannerbuckettaskboardtaskformat.model';
import { PlannerBucketTaskBoardTaskFormatCollection } from './plannerbuckettaskboardtaskformat.collection';
//#endregion

export const PlannerBucketTaskBoardTaskFormatConfig = {
  name: "plannerBucketTaskBoardTaskFormat",
  base: "microsoft.graph.entity",
  model: PlannerBucketTaskBoardTaskFormatModel,
  collection: PlannerBucketTaskBoardTaskFormatCollection,
  annotations: [],
  fields: {
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerBucketTaskBoardTaskFormat>;