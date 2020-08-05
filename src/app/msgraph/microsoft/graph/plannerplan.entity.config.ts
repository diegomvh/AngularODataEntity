import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerPlan } from './plannerplan.entity';
//#endregion

export const PlannerPlanConfig = {
  name: "plannerPlan",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    owner: {type: 'Edm.String'},
    title: {type: 'Edm.String', nullable: false},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true},
    buckets: {type: 'graph.plannerBucket', collection: true, navigation: true},
    details: {type: 'graph.plannerPlanDetails', navigation: true}
  }
} as EntityConfig<PlannerPlan>;