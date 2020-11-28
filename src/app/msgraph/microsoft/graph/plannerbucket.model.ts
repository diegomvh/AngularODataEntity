import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerBucketCollection } from './plannerbucket.collection';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export class PlannerBucketModel<E extends PlannerBucket> extends EntityModel<E> {
  //#region ODataApi Properties
  name: string;
  orderHint?: string;
  planId?: string;
  tasks?: PlannerTaskCollection<PlannerTask, PlannerTaskModel<PlannerTask>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}