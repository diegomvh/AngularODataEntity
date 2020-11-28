import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePattern } from './recurrencepattern.complex';
import { RecurrenceRange } from './recurrencerange.complex';
import { RecurrencePatternModel } from './recurrencepattern.model';
import { RecurrenceRangeModel } from './recurrencerange.model';
import { RecurrencePatternCollection } from './recurrencepattern.collection';
import { RecurrenceRangeCollection } from './recurrencerange.collection';
//#endregion

export interface PatternedRecurrence {
  //#region ODataApi Properties
  pattern?: RecurrencePattern;
  range?: RecurrenceRange;
  //#endregion
}