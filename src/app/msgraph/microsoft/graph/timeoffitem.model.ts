import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityModel } from './scheduleentity.model';
import { TimeOffItem } from './timeoffitem.complex';
import { TimeOffItemCollection } from './timeoffitem.collection';
//#endregion

export class TimeOffItemModel<E extends TimeOffItem> extends ScheduleEntityModel<E> {
  //#region ODataApi Properties
  timeOffReasonId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}