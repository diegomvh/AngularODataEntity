import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.entity';
//#endregion

export interface TimeOffItem extends ScheduleEntity {
  //#region ODataApi Properties
  timeOffReasonId?: string;
  //#endregion
}