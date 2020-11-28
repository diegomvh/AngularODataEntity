import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { PlannerPlanDetailsModel } from './plannerplandetails.model';
import { PlannerPlanDetailsCollection } from './plannerplandetails.collection';
//#endregion

export const PlannerPlanDetailsConfig = {
  name: "plannerPlanDetails",
  base: "microsoft.graph.entity",
  model: PlannerPlanDetailsModel,
  collection: PlannerPlanDetailsCollection,
  annotations: [],
  fields: {
    categoryDescriptions: {type: 'graph.plannerCategoryDescriptions'},
    sharedWith: {type: 'graph.plannerUserIds'}
  }
} as EntityConfig<PlannerPlanDetails>;