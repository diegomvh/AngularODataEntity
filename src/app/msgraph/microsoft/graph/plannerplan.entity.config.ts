import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPlan } from './plannerplan.entity';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerPlanCollection } from './plannerplan.collection';
//#endregion

export const PlannerPlanConfig = {
  name: "plannerPlan",
  base: "microsoft.graph.entity",
  model: PlannerPlanModel,
  collection: PlannerPlanCollection,
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    owner: {type: 'Edm.String'},
    title: {type: 'Edm.String', nullable: false},
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true},
    details: {type: 'graph.plannerPlanDetails', navigation: true},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PlannerPlan>;