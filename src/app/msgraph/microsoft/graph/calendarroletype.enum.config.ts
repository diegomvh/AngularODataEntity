import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarRoleType } from './calendarroletype.enum';
//#endregion

export const CalendarRoleTypeConfig = {
  name: "CalendarRoleType",
  members: CalendarRoleType
} as EnumConfig<CalendarRoleType>;