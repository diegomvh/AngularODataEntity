import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeBase } from './attendeebase.entity';
import { TimeSlot } from './timeslot.entity';
import { ResponseStatus } from './responsestatus.entity';
//#endregion

export interface Attendee extends AttendeeBase {
  //#region ODataApi Properties
  status?: ResponseStatus;
  proposedNewTime?: TimeSlot;
  //#endregion
}