import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
//#endregion

export interface RecurrenceRange {
  //#region ODataApi Properties
  endDate?: Date;
  numberOfOccurrences: number;
  recurrenceTimeZone?: string;
  startDate?: Date;
  type?: RecurrenceRangeType;
  //#endregion
}