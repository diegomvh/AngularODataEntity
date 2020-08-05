import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePatternType } from './recurrencepatterntype.enum';
//#endregion

export const RecurrencePatternTypeConfig = {
  name: "RecurrencePatternType",
  members: RecurrencePatternType
} as EnumConfig<RecurrencePatternType>;