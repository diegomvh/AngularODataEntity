import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
//#endregion

export const CalendarSharingActionTypeConfig = {
  name: "calendarSharingActionType",
  members: CalendarSharingActionType
} as EnumTypeConfig<CalendarSharingActionType>;