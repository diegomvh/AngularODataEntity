import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Status } from './status.enum';
import { UserActivity } from './useractivity.entity';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { UserActivityModel } from './useractivity.model';
import { ActivityHistoryItemModel } from './activityhistoryitem.model';
import { UserActivityCollection } from './useractivity.collection';
//#endregion

export class ActivityHistoryItemCollection<E extends ActivityHistoryItem, M extends ActivityHistoryItemModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}