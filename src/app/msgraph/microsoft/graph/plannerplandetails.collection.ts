import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
import { PlannerUserIds } from './planneruserids.complex';
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { PlannerCategoryDescriptionsModel } from './plannercategorydescriptions.model';
import { PlannerUserIdsModel } from './planneruserids.model';
import { PlannerPlanDetailsModel } from './plannerplandetails.model';
import { PlannerCategoryDescriptionsCollection } from './plannercategorydescriptions.collection';
import { PlannerUserIdsCollection } from './planneruserids.collection';
//#endregion

export class PlannerPlanDetailsCollection<E extends PlannerPlanDetails, M extends PlannerPlanDetailsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}