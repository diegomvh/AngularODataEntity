import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface TimeOffRequest extends ScheduleChangeRequest {
  //#region ODataApi Properties
  startDateTime?: Date;
  endDateTime?: Date;
  timeOffReasonId?: string;
  //#endregion
}