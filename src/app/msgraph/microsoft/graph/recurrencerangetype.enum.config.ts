import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrenceRangeType } from './recurrencerangetype.enum';
//#endregion

export const RecurrenceRangeTypeConfig = {
  name: "recurrenceRangeType",
  members: RecurrenceRangeType
} as EnumConfig<RecurrenceRangeType>;