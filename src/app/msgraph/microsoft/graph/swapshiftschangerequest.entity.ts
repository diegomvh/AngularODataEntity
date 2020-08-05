import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OfferShiftRequest } from './offershiftrequest.entity';
//#endregion

export interface SwapShiftsChangeRequest extends OfferShiftRequest {
  //#region ODataApi Properties
  recipientShiftId?: string;
  //#endregion
}