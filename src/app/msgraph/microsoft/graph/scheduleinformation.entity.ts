import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.entity';
import { FreeBusyError } from './freebusyerror.entity';
import { ScheduleItem } from './scheduleitem.entity';
import { WorkingHoursModel } from './workinghours.model';
import { FreeBusyErrorModel } from './freebusyerror.model';
import { ScheduleItemModel } from './scheduleitem.model';
import { WorkingHoursCollection } from './workinghours.collection';
import { FreeBusyErrorCollection } from './freebusyerror.collection';
import { ScheduleItemCollection } from './scheduleitem.collection';
//#endregion

export interface ScheduleInformation {
  //#region ODataApi Properties
  availabilityView?: string;
  error?: FreeBusyError;
  scheduleId?: string;
  scheduleItems?: ScheduleItem[];
  workingHours?: WorkingHours;
  //#endregion
}