import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerUserIds } from './planneruserids.entity';
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.entity';
//#endregion

export interface PlannerPlanDetails extends Entity {
  //#region ODataApi Properties
  sharedWith?: PlannerUserIds;
  categoryDescriptions?: PlannerCategoryDescriptions;
  //#endregion
}