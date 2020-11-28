import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { FollowupFlag } from './followupflag.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { FollowupFlagCollection } from './followupflag.collection';
//#endregion

export class FollowupFlagModel<E extends FollowupFlag> extends ODataModel<E> {
  //#region ODataApi Properties
  completedDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  dueDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  flagStatus?: FollowupFlagStatus;
  startDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}