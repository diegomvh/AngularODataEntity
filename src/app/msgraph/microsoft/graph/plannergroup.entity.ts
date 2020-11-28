import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPlan } from './plannerplan.entity';
import { EntityModel } from './entity.model';
import { PlannerPlanModel } from './plannerplan.model';
import { EntityCollection } from './entity.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
//#endregion

export interface PlannerGroup extends Entity {
  //#region ODataApi Properties
  plans?: PlannerPlan[];
  //#endregion
}