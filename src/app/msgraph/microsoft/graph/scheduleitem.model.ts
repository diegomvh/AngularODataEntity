import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { ScheduleItem } from './scheduleitem.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ScheduleItemCollection } from './scheduleitem.collection';
//#endregion

export class ScheduleItemModel<E extends ScheduleItem> extends ODataModel<E> {
  //#region ODataApi Properties
  end?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  isPrivate?: boolean;
  location?: string;
  start?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  status?: FreeBusyStatus;
  subject?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}