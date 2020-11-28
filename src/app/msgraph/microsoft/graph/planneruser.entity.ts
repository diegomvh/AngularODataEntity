import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { EntityModel } from './entity.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { EntityCollection } from './entity.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export interface PlannerUser extends Entity {
  //#region ODataApi Properties
  plans?: PlannerPlan[];
  tasks?: PlannerTask[];
  //#endregion
}