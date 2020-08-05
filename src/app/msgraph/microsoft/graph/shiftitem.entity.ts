import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.entity';
import { ShiftActivity } from './shiftactivity.entity';
//#endregion

export interface ShiftItem extends ScheduleEntity {
  //#region ODataApi Properties
  displayName?: string;
  notes?: string;
  activities?: ShiftActivity[];
  //#endregion
}