import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerPlan } from './plannerplan.entity';
//#endregion

export interface PlannerGroup extends Entity {
  //#region ODataApi Properties
  plans?: PlannerPlan[];
  //#endregion
}