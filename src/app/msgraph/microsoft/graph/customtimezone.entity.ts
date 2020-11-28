import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneBase } from './timezonebase.entity';
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
import { DaylightTimeZoneOffset } from './daylighttimezoneoffset.entity';
import { TimeZoneBaseModel } from './timezonebase.model';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { DaylightTimeZoneOffsetModel } from './daylighttimezoneoffset.model';
import { TimeZoneBaseCollection } from './timezonebase.collection';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
import { DaylightTimeZoneOffsetCollection } from './daylighttimezoneoffset.collection';
//#endregion

export interface CustomTimeZone extends TimeZoneBase {
  //#region ODataApi Properties
  bias?: number;
  daylightOffset?: DaylightTimeZoneOffset;
  standardOffset?: StandardTimeZoneOffset;
  //#endregion
}