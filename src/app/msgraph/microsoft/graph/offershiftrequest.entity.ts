import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequest } from './schedulechangerequest.entity';
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
//#endregion

export interface OfferShiftRequest extends ScheduleChangeRequest {
  //#region ODataApi Properties
  recipientActionDateTime?: Date;
  recipientActionMessage?: string;
  recipientUserId?: string;
  senderShiftId?: string;
  //#endregion
}