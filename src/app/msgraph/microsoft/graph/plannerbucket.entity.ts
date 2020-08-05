import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
//#endregion

export interface PlannerBucket extends Entity {
  //#region ODataApi Properties
  name: string;
  planId?: string;
  orderHint?: string;
  tasks?: PlannerTask[];
  //#endregion
}