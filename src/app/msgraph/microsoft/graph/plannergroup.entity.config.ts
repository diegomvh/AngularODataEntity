import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerGroup } from './plannergroup.entity';
//#endregion

export const PlannerGroupConfig = {
  name: "plannerGroup",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true}
  }
} as EntityConfig<PlannerGroup>;