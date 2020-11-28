import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ScheduleEntity {
  //#region ODataApi Properties
  endDateTime?: Date;
  startDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
}