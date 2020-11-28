import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EventMessageCollection } from './eventmessage.collection';
import { MeetingRequestType } from './meetingrequesttype.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { EventMessageRequest } from './eventmessagerequest.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { EventMessageRequestModel } from './eventmessagerequest.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
//#endregion

export class EventMessageRequestCollection<E extends EventMessageRequest, M extends EventMessageRequestModel<E>> extends EventMessageCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}