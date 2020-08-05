import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
import { ResponseType } from './responsetype.enum';
import { TimeSlot } from './timeslot.entity';
//#endregion

export interface EventMessageResponse extends EventMessage {
  //#region ODataApi Properties
  proposedNewTime?: TimeSlot;
  responseType?: ResponseType;
  //#endregion
}