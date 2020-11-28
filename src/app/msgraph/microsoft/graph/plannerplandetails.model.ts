import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.entity';
import { PlannerUserIds } from './planneruserids.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { PlannerCategoryDescriptionsModel } from './plannercategorydescriptions.model';
import { PlannerUserIdsModel } from './planneruserids.model';
import { PlannerCategoryDescriptionsCollection } from './plannercategorydescriptions.collection';
import { PlannerUserIdsCollection } from './planneruserids.collection';
import { PlannerPlanDetailsCollection } from './plannerplandetails.collection';
//#endregion

export class PlannerPlanDetailsModel<E extends PlannerPlanDetails> extends EntityModel<E> {
  //#region ODataApi Properties
  categoryDescriptions?: PlannerCategoryDescriptionsModel<PlannerCategoryDescriptions>;
  sharedWith?: PlannerUserIdsModel<PlannerUserIds>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}