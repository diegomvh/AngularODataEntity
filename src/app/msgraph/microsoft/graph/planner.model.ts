import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Planner } from './planner.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerCollection } from './planner.collection';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export class PlannerModel<E extends Planner> extends EntityModel<E> {
  //#region ODataApi Properties
  buckets?: PlannerBucketCollection<PlannerBucket, PlannerBucketModel<PlannerBucket>>;
  plans?: PlannerPlanCollection<PlannerPlan, PlannerPlanModel<PlannerPlan>>;
  tasks?: PlannerTaskCollection<PlannerTask, PlannerTaskModel<PlannerTask>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}