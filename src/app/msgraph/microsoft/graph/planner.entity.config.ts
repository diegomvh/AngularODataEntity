import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Planner } from './planner.entity';
//#endregion

export const PlannerConfig = {
  name: "Planner",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true},
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true}
  }
} as EntityConfig<Planner>;