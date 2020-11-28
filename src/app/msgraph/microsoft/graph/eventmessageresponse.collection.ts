import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EventMessageCollection } from './eventmessage.collection';
import { ResponseType } from './responsetype.enum';
import { TimeSlot } from './timeslot.entity';
import { EventMessageResponse } from './eventmessageresponse.entity';
import { TimeSlotModel } from './timeslot.model';
import { EventMessageResponseModel } from './eventmessageresponse.model';
import { TimeSlotCollection } from './timeslot.collection';
//#endregion

export class EventMessageResponseCollection<E extends EventMessageResponse, M extends EventMessageResponseModel<E>> extends EventMessageCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}