import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Status } from './status.enum';
import { UserActivity } from './useractivity.entity';
import { ActivityHistoryItem } from './activityhistoryitem.entity';
import { UserActivityModel } from './useractivity.model';
import { UserActivityCollection } from './useractivity.collection';
import { ActivityHistoryItemCollection } from './activityhistoryitem.collection';
//#endregion

export class ActivityHistoryItemModel<E extends ActivityHistoryItem> extends EntityModel<E> {
  //#region ODataApi Properties
  activeDurationSeconds?: number;
  createdDateTime?: Date;
  expirationDateTime?: Date;
  lastActiveDateTime?: Date;
  lastModifiedDateTime?: Date;
  startedDateTime: Date;
  status?: Status;
  userTimezone?: string;
  activity?: UserActivityModel<UserActivity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}