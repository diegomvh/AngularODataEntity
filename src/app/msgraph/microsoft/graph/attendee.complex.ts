import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeBase } from './attendeebase.complex';
import { TimeSlot } from './timeslot.complex';
import { ResponseStatus } from './responsestatus.complex';
import { AttendeeBaseModel } from './attendeebase.model';
import { TimeSlotModel } from './timeslot.model';
import { ResponseStatusModel } from './responsestatus.model';
import { AttendeeBaseCollection } from './attendeebase.collection';
import { TimeSlotCollection } from './timeslot.collection';
import { ResponseStatusCollection } from './responsestatus.collection';
//#endregion

export interface Attendee extends AttendeeBase {
  //#region ODataApi Properties
  proposedNewTime?: TimeSlot;
  status?: ResponseStatus;
  //#endregion
}