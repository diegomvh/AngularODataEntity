import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingActionImportance } from './calendarsharingactionimportance.enum';
//#endregion

export const CalendarSharingActionImportanceConfig = {
  name: "calendarSharingActionImportance",
  members: CalendarSharingActionImportance
} as EnumTypeConfig<CalendarSharingActionImportance>;