import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
import { TimeSlot } from './timeslot.entity';
//#endregion

export interface TimeConstraint {
  //#region ODataApi Properties
  activityDomain?: ActivityDomain;
  timeSlots?: TimeSlot[];
  //#endregion
}