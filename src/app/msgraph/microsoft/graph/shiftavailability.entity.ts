import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { TimeRange } from './timerange.entity';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { TimeRangeModel } from './timerange.model';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { TimeRangeCollection } from './timerange.collection';
//#endregion

export interface ShiftAvailability {
  //#region ODataApi Properties
  recurrence?: PatternedRecurrence;
  timeSlots?: TimeRange[];
  timeZone?: string;
  //#endregion
}