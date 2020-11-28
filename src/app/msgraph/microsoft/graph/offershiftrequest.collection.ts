import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestCollection } from './schedulechangerequest.collection';
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OfferShiftRequestModel } from './offershiftrequest.model';
//#endregion

export class OfferShiftRequestCollection<E extends OfferShiftRequest, M extends OfferShiftRequestModel<E>> extends ScheduleChangeRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}