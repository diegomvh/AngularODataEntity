import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Planner } from './planner.entity';
import { PlannerModel } from './planner.model';
import { PlannerCollection } from './planner.collection';
//#endregion

export const PlannerConfig = {
  name: "planner",
  base: "microsoft.graph.entity",
  model: PlannerModel,
  collection: PlannerCollection,
  annotations: [],
  fields: {
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true},
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Planner>;