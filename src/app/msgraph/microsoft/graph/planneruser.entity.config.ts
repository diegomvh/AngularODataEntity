import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerUser } from './planneruser.entity';
import { PlannerUserModel } from './planneruser.model';
import { PlannerUserCollection } from './planneruser.collection';
//#endregion

export const PlannerUserConfig = {
  name: "plannerUser",
  base: "microsoft.graph.entity",
  model: PlannerUserModel,
  collection: PlannerUserCollection,
  annotations: [],
  fields: {
    plans: {type: 'graph.plannerPlan', collection: true, navigation: true},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as EntityConfig<PlannerUser>;