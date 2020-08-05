import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { RecurrencePatternType } from './recurrencepatterntype.enum';
import { WeekIndex } from './weekindex.enum';
//#endregion

export interface RecurrencePattern {
  //#region ODataApi Properties
  type?: RecurrencePatternType;
  interval: number;
  month: number;
  dayOfMonth: number;
  daysOfWeek?: DayOfWeek;
  firstDayOfWeek?: DayOfWeek;
  index?: WeekIndex;
  //#endregion
}