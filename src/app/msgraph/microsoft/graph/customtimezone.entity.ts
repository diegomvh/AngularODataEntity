import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.entity';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.entity';
//#endregion

export interface CustomTimeZone extends TimeZoneBase {
  //#region ODataApi Properties
  bias?: number;
  standardOffset?: StandardTimeZoneOffset;
  daylightOffset?: DaylightTimeZoneOffset;
  //#endregion
}