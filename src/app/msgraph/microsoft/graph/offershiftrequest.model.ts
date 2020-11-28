import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ScheduleChangeRequestModel } from './schedulechangerequest.model';
import { OfferShiftRequest } from './offershiftrequest.entity';
import { OfferShiftRequestCollection } from './offershiftrequest.collection';
//#endregion

export class OfferShiftRequestModel<E extends OfferShiftRequest> extends ScheduleChangeRequestModel<E> {
  //#region ODataApi Properties
  recipientActionDateTime?: Date;
  recipientActionMessage?: string;
  recipientUserId?: string;
  senderShiftId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}