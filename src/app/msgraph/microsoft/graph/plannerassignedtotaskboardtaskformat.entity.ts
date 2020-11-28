import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.complex';
import { PlannerOrderHintsByAssigneeModel } from './plannerorderhintsbyassignee.model';
import { EntityModel } from './entity.model';
import { PlannerOrderHintsByAssigneeCollection } from './plannerorderhintsbyassignee.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {
  //#region ODataApi Properties
  orderHintsByAssignee?: PlannerOrderHintsByAssignee;
  unassignedOrderHint?: string;
  //#endregion
}