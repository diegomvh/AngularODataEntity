import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.complex';
import { ShiftActivity } from './shiftactivity.complex';
import { ScheduleEntityModel } from './scheduleentity.model';
import { ShiftActivityModel } from './shiftactivity.model';
import { ScheduleEntityCollection } from './scheduleentity.collection';
import { ShiftActivityCollection } from './shiftactivity.collection';
//#endregion

export interface ShiftItem extends ScheduleEntity {
  //#region ODataApi Properties
  activities?: ShiftActivity[];
  displayName?: string;
  notes?: string;
  //#endregion
}