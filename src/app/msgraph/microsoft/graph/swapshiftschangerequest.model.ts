import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OfferShiftRequestModel } from './offershiftrequest.model';
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { SwapShiftsChangeRequestCollection } from './swapshiftschangerequest.collection';
//#endregion

export class SwapShiftsChangeRequestModel<E extends SwapShiftsChangeRequest> extends OfferShiftRequestModel<E> {
  //#region ODataApi Properties
  recipientShiftId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}