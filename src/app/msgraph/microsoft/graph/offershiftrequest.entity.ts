import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
//#endregion

export interface OfferShiftRequest extends ScheduleChangeRequest {
  //#region ODataApi Properties
  recipientActionMessage?: string;
  recipientActionDateTime?: Date;
  senderShiftId?: string;
  recipientUserId?: string;
  //#endregion
}