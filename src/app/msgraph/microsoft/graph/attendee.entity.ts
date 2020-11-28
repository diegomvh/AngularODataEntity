import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeBase } from './attendeebase.entity';
import { TimeSlot } from './timeslot.entity';
import { ResponseStatus } from './responsestatus.entity';
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