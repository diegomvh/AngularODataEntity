import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PlannerBucketTaskBoardTaskFormat } from './plannerbuckettaskboardtaskformat.entity';
import { PlannerBucketTaskBoardTaskFormatModel } from './plannerbuckettaskboardtaskformat.model';
//#endregion

export class PlannerBucketTaskBoardTaskFormatCollection<E extends PlannerBucketTaskBoardTaskFormat, M extends PlannerBucketTaskBoardTaskFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}