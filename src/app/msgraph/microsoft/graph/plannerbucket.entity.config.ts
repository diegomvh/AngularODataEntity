import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerBucketCollection } from './plannerbucket.collection';
//#endregion

export const PlannerBucketConfig = {
  name: "plannerBucket",
  base: "microsoft.graph.entity",
  model: PlannerBucketModel,
  collection: PlannerBucketCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    orderHint: {type: 'Edm.String'},
    planId: {type: 'Edm.String'},
    tasks: {type: 'graph.plannerTask', collection: true, navigation: true}
  }
} as EntityConfig<PlannerBucket>;