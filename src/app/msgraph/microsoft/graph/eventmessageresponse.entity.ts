import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
import { ResponseType } from './responsetype.enum';
import { TimeSlot } from './timeslot.entity';
import { TimeSlotModel } from './timeslot.model';
import { EventMessageModel } from './eventmessage.model';
import { TimeSlotCollection } from './timeslot.collection';
import { EventMessageCollection } from './eventmessage.collection';
//#endregion

export interface EventMessageResponse extends EventMessage {
  //#region ODataApi Properties
  proposedNewTime?: TimeSlot;
  responseType?: ResponseType;
  //#endregion
}