import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { TimeRange } from './timerange.entity';
//#endregion

export interface ShiftAvailability {
  //#region ODataApi Properties
  recurrence?: PatternedRecurrence;
  timeZone?: string;
  timeSlots?: TimeRange[];
  //#endregion
}