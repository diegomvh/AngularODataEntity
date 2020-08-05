import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePatternType } from './recurrencepatterntype.enum';
//#endregion

export const RecurrencePatternTypeConfig = {
  name: "recurrencePatternType",
  members: RecurrencePatternType
} as EnumConfig<RecurrencePatternType>;