import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OfferShiftRequestCollection } from './offershiftrequest.collection';
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { SwapShiftsChangeRequestModel } from './swapshiftschangerequest.model';
//#endregion

export class SwapShiftsChangeRequestCollection<E extends SwapShiftsChangeRequest, M extends SwapShiftsChangeRequestModel<E>> extends OfferShiftRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}