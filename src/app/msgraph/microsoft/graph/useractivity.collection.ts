import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Status } from './status.enum';
import { Json } from './json.complex';
import { VisualInfo } from './visualinfo.complex';
import { UserActivity } from './useractivity.entity';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { JsonModel } from './json.model';
import { VisualInfoModel } from './visualinfo.model';
import { UserActivityModel } from './useractivity.model';
import { ActivityHistoryItemModel } from './activityhistoryitem.model';
import { JsonCollection } from './json.collection';
import { VisualInfoCollection } from './visualinfo.collection';
import { ActivityHistoryItemCollection } from './activityhistoryitem.collection';
//#endregion

export class UserActivityCollection<E extends UserActivity, M extends UserActivityModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}