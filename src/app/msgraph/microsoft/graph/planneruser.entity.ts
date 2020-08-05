import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlan } from './plannerplan.entity';
//#endregion

export interface PlannerUser extends Entity {
  //#region ODataApi Properties
  tasks?: PlannerTask[];
  plans?: PlannerPlan[];
  //#endregion
}