import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerGroup } from './plannergroup.entity';
import { PlannerGroupModel } from './plannergroup.model';
import { PlannerGroupCollection } from './plannergroup.collection';
//#endregion

export const PlannerGroupConfig = {
  name: "plannerGroup",
  base: "microsoft.graph.entity",
  model: PlannerGroupModel,
  collection: PlannerGroupCollection,
  annotations: [],
  fields: {
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PlannerGroup>;