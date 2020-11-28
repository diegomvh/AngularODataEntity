import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
import { PlannerUserIds } from './planneruserids.complex';
import { PlannerCategoryDescriptionsModel } from './plannercategorydescriptions.model';
import { PlannerUserIdsModel } from './planneruserids.model';
import { EntityModel } from './entity.model';
import { PlannerCategoryDescriptionsCollection } from './plannercategorydescriptions.collection';
import { PlannerUserIdsCollection } from './planneruserids.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface PlannerPlanDetails extends Entity {
  //#region ODataApi Properties
  categoryDescriptions?: PlannerCategoryDescriptions;
  sharedWith?: PlannerUserIds;
  //#endregion
}