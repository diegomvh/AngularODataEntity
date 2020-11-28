import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
//#endregion

export interface TimeOffRequest extends ScheduleChangeRequest {
  //#region ODataApi Properties
  endDateTime?: Date;
  startDateTime?: Date;
  timeOffReasonId?: string;
  //#endregion
}