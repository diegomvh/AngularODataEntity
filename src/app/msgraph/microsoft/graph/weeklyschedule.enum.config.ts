import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WeeklySchedule } from './weeklyschedule.enum';
//#endregion

export const WeeklyScheduleConfig = {
  name: "WeeklySchedule",
  members: WeeklySchedule
} as EnumConfig<WeeklySchedule>;