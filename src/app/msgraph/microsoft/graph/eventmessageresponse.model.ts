import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EventMessageModel } from './eventmessage.model';
import { ResponseType } from './responsetype.enum';
import { TimeSlot } from './timeslot.complex';
import { EventMessageResponse } from './eventmessageresponse.entity';
import { TimeSlotModel } from './timeslot.model';
import { TimeSlotCollection } from './timeslot.collection';
import { EventMessageResponseCollection } from './eventmessageresponse.collection';
//#endregion

export class EventMessageResponseModel<E extends EventMessageResponse> extends EventMessageModel<E> {
  //#region ODataApi Properties
  proposedNewTime?: TimeSlotModel<TimeSlot>;
  responseType?: ResponseType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}