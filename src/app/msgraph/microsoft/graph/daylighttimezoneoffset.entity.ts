import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
//#endregion

export interface DaylightTimeZoneOffset extends StandardTimeZoneOffset {
  //#region ODataApi Properties
  daylightBias?: number;
  //#endregion
}