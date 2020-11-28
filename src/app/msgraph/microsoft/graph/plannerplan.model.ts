import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { IdentitySet } from './identityset.complex';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerPlanDetails } from './plannerplandetails.entity';
import { IdentitySetModel } from './identityset.model';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerPlanDetailsModel } from './plannerplandetails.model';
import { IdentitySetCollection } from './identityset.collection';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
import { PlannerPlanDetailsCollection } from './plannerplandetails.collection';
//#endregion

export class PlannerPlanModel<E extends PlannerPlan> extends EntityModel<E> {
  //#region ODataApi Properties
  createdBy?: IdentitySetModel<IdentitySet>;
  createdDateTime?: Date;
  owner?: string;
  title: string;
  buckets?: PlannerBucketCollection<PlannerBucket, PlannerBucketModel<PlannerBucket>>;
  details?: PlannerPlanDetailsModel<PlannerPlanDetails>;
  tasks?: PlannerTaskCollection<PlannerTask, PlannerTaskModel<PlannerTask>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}