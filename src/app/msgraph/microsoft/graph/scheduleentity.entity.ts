import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntityTheme } from './scheduleentitytheme.enum';
//#endregion

export interface ScheduleEntity {
  //#region ODataApi Properties
  startDateTime?: Date;
  endDateTime?: Date;
  theme: ScheduleEntityTheme;
  //#endregion
}