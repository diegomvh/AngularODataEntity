import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.complex';
import { ScheduleEntityModel } from './scheduleentity.model';
import { ScheduleEntityCollection } from './scheduleentity.collection';
//#endregion

export interface TimeOffItem extends ScheduleEntity {
  //#region ODataApi Properties
  timeOffReasonId?: string;
  //#endregion
}