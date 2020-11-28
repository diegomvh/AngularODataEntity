import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ActivityDomain } from './activitydomain.enum';
import { TimeSlot } from './timeslot.entity';
import { TimeSlotModel } from './timeslot.model';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export interface TimeConstraint {
  //#region ODataApi Properties
  activityDomain?: ActivityDomain;
  timeSlots?: TimeSlot[];
  //#endregion
}