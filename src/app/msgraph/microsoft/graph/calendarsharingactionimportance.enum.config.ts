import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
//#endregion

export const CalendarSharingActionImportanceConfig = {
  name: "CalendarSharingActionImportance",
  members: CalendarSharingActionImportance
} as EnumConfig<CalendarSharingActionImportance>;