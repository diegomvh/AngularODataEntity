import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { OfferShiftRequestCollection } from './offershiftrequest.collection';
//#endregion

export interface SwapShiftsChangeRequest extends OfferShiftRequest {
  //#region ODataApi Properties
  recipientShiftId?: string;
  //#endregion
}