import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export interface StandardTimeZoneOffset {
  //#region ODataApi Properties
  dayOccurrence?: number;
  dayOfWeek?: DayOfWeek;
  month?: number;
  time?: Date;
  year?: number;
  //#endregion
}