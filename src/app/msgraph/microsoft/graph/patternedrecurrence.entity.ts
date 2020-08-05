import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrenceRange } from './recurrencerange.entity';
//#endregion

export interface PatternedRecurrence {
  //#region ODataApi Properties
  pattern?: RecurrencePattern;
  range?: RecurrenceRange;
  //#endregion
}