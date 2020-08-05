import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

export const PlannerBucketConfig = {
  name: "PlannerBucket",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    planId: {type: 'Edm.String'},
    orderHint: {type: 'Edm.String'},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as EntityConfig<PlannerBucket>;