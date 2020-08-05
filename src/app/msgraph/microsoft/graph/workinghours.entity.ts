import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { TimeZoneBase } from './timezonebase.entity';
//#endregion

export interface WorkingHours {
  //#region ODataApi Properties
  daysOfWeek?: DayOfWeek;
  startTime?: Date;
  endTime?: Date;
  timeZone?: TimeZoneBase;
  //#endregion
}