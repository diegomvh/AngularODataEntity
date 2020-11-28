import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Status } from './status.enum';
import { Json } from './json.entity';
import { VisualInfo } from './visualinfo.entity';
import { UserActivity } from './useractivity.entity';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { JsonModel } from './json.model';
import { VisualInfoModel } from './visualinfo.model';
import { ActivityHistoryItemModel } from './activityhistoryitem.model';
import { JsonCollection } from './json.collection';
import { VisualInfoCollection } from './visualinfo.collection';
import { UserActivityCollection } from './useractivity.collection';
import { ActivityHistoryItemCollection } from './activityhistoryitem.collection';
//#endregion

export class UserActivityModel<E extends UserActivity> extends EntityModel<E> {
  //#region ODataApi Properties
  activationUrl: string;
  activitySourceHost: string;
  appActivityId: string;
  appDisplayName?: string;
  contentInfo?: JsonModel<Json>;
  contentUrl?: string;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  fallbackUrl?: string;
  lastModifiedDateTime?: Date;
  status?: Status;
  userTimezone?: string;
  visualElements: VisualInfoModel<VisualInfo>;
  historyItems?: ActivityHistoryItemCollection<ActivityHistoryItem, ActivityHistoryItemModel<ActivityHistoryItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}