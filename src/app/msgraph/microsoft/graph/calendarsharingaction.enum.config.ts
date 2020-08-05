import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingAction } from './calendarsharingaction.enum';
//#endregion

export const CalendarSharingActionConfig = {
  name: "calendarSharingAction",
  members: CalendarSharingAction
} as EnumConfig<CalendarSharingAction>;