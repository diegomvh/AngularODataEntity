import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { IdentitySet } from './identityset.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerPlanDetailsModel } from './plannerplandetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerTaskCollection } from './plannertask.collection';
import { PlannerPlanDetailsCollection } from './plannerplandetails.collection';
//#endregion

export class PlannerPlanCollection<E extends PlannerPlan, M extends PlannerPlanModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}