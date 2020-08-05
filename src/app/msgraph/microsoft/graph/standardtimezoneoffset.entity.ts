import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export interface StandardTimeZoneOffset {
  //#region ODataApi Properties
  time?: Date;
  dayOccurrence?: number;
  dayOfWeek?: DayOfWeek;
  month?: number;
  year?: number;
  //#endregion
}