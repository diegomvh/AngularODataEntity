import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerTask } from './plannertask.entity';
import { EntityModel } from './entity.model';
import { PlannerTaskModel } from './plannertask.model';
import { EntityCollection } from './entity.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export interface PlannerBucket extends Entity {
  //#region ODataApi Properties
  name: string;
  orderHint?: string;
  planId?: string;
  tasks?: PlannerTask[];
  //#endregion
}