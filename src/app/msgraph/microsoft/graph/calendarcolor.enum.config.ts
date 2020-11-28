import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarColor } from './calendarcolor.enum';
//#endregion

export const CalendarColorConfig = {
  name: "calendarColor",
  members: CalendarColor
} as EnumTypeConfig<CalendarColor>;