import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ShiftActivity {
  //#region ODataApi Properties
  isPaid?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  code?: string;
  displayName?: string;
  theme: ScheduleEntityTheme;
  //#endregion
}