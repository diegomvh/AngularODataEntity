import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.entity';
import { ScheduleItem } from './scheduleitem.entity';
import { FreeBusyError } from './freebusyerror.entity';
//#endregion

export interface ScheduleInformation {
  //#region ODataApi Properties
  scheduleId?: string;
  scheduleItems?: ScheduleItem[];
  availabilityView?: string;
  error?: FreeBusyError;
  workingHours?: WorkingHours;
  //#endregion
}