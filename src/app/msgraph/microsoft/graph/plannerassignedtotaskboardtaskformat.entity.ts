import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.entity';
//#endregion

export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {
  //#region ODataApi Properties
  unassignedOrderHint?: string;
  orderHintsByAssignee?: PlannerOrderHintsByAssignee;
  //#endregion
}