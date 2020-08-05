import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WeeklySchedule } from './weeklyschedule.enum';
//#endregion

export const WeeklyScheduleConfig = {
  name: "weeklySchedule",
  members: WeeklySchedule
} as EnumConfig<WeeklySchedule>;