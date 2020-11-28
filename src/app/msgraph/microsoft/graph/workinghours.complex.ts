import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
import { TimeZoneBase } from './timezonebase.complex';
import { TimeZoneBaseModel } from './timezonebase.model';
import { TimeZoneBaseCollection } from './timezonebase.collection';
//#endregion

export interface WorkingHours {
  //#region ODataApi Properties
  daysOfWeek?: DayOfWeek;
  endTime?: Date;
  startTime?: Date;
  timeZone?: TimeZoneBase;
  //#endregion
}