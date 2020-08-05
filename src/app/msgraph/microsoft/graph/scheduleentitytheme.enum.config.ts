import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export const ScheduleEntityThemeConfig = {
  name: "ScheduleEntityTheme",
  members: ScheduleEntityTheme
} as EnumConfig<ScheduleEntityTheme>;