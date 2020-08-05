import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
//#endregion

export interface RecurrenceRange {
  //#region ODataApi Properties
  type?: RecurrenceRangeType;
  startDate?: Date;
  endDate?: Date;
  recurrenceTimeZone?: string;
  numberOfOccurrences: number;
  //#endregion
}