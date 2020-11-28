import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerBucket } from './plannerbucket.entity';
import { PlannerTask } from './plannertask.entity';
import { PlannerBucketModel } from './plannerbucket.model';
import { PlannerTaskModel } from './plannertask.model';
import { PlannerTaskCollection } from './plannertask.collection';
//#endregion

export class PlannerBucketCollection<E extends PlannerBucket, M extends PlannerBucketModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}