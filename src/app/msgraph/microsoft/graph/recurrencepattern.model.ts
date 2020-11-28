import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { RecurrencePatternType } from './recurrencepatterntype.enum';
import { WeekIndex } from './weekindex.enum';
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrencePatternCollection } from './recurrencepattern.collection';
//#endregion

export class RecurrencePatternModel<E extends RecurrencePattern> extends ODataModel<E> {
  //#region ODataApi Properties
  dayOfMonth: number;
  daysOfWeek?: DayOfWeek;
  firstDayOfWeek?: DayOfWeek;
  index?: WeekIndex;
  interval: number;
  month: number;
  type?: RecurrencePatternType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}