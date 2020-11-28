import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export const DayOfWeekConfig = {
  name: "dayOfWeek",
  members: DayOfWeek
} as EnumTypeConfig<DayOfWeek>;