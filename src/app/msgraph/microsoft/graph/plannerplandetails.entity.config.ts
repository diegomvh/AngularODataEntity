import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPlanDetails } from './plannerplandetails.entity';
//#endregion

export const PlannerPlanDetailsConfig = {
  name: "plannerPlanDetails",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    sharedWith: {type: 'graph.plannerUserIds'},
    categoryDescriptions: {type: 'graph.plannerCategoryDescriptions'}
  }
} as EntityConfig<PlannerPlanDetails>;