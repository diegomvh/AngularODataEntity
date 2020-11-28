import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { EntityModel } from './entity.model';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { EntityCollection } from './entity.collection';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export interface Planner extends Entity {
  //#region ODataApi Properties
  buckets?: PlannerBucket[];
  plans?: PlannerPlan[];
  tasks?: PlannerTask[];
  //#endregion
}