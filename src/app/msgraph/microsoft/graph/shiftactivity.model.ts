import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
import { ShiftActivity } from './shiftactivity.complex';
import { ShiftActivityCollection } from './shiftactivity.collection';
//#endregion

export class ShiftActivityModel<E extends ShiftActivity> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  displayName?: string;
  endDateTime?: Date;
  isPaid?: boolean;
  startDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}