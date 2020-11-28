import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrenceRange } from './recurrencerange.entity';
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