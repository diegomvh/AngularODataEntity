import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerBucket } from './plannerbucket.entity';
//#endregion

export interface Planner extends Entity {
  //#region ODataApi Properties
  tasks?: PlannerTask[];
  plans?: PlannerPlan[];
  buckets?: PlannerBucket[];
  //#endregion
}