import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingActionType } from './calendarsharingactiontype.enum';
//#endregion

export const CalendarSharingActionTypeConfig = {
  name: "calendarSharingActionType",
  members: CalendarSharingActionType
} as EnumConfig<CalendarSharingActionType>;