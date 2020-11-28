import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { ScheduleItem } from './scheduleitem.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { ScheduleItemModel } from './scheduleitem.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class ScheduleItemCollection<E extends ScheduleItem, M extends ScheduleItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}