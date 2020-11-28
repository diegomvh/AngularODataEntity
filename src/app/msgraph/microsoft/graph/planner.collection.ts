import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Planner } from './planner.entity';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerPlan } from './plannerplan.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerModel } from './planner.model';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerPlanModel } from './plannerplan.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerPlanCollection } from './plannerplan.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export class PlannerCollection<E extends Planner, M extends PlannerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}