import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ShiftActivity {
  //#region ODataApi Properties
  code?: string;
  displayName?: string;
  endDateTime?: Date;
  isPaid?: boolean;
  startDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
}