import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
//#endregion

export interface DaylightTimeZoneOffset extends StandardTimeZoneOffset {
  //#region ODataApi Properties
  daylightBias?: number;
  //#endregion
}