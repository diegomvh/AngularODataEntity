import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface OpenShiftChangeRequest extends ScheduleChangeRequest {
  //#region ODataApi Properties
  openShiftId?: string;
  //#endregion
}