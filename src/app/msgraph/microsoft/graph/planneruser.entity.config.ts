import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerUser } from './planneruser.entity';
//#endregion

export const PlannerUserConfig = {
  name: "plannerUser",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true}
  }
} as EntityConfig<PlannerUser>;