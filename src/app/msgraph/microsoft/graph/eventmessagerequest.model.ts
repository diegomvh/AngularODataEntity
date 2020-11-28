import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EventMessageModel } from './eventmessage.model';
import { MeetingRequestType } from './meetingrequesttype.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { EventMessageRequest } from './eventmessagerequest.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { EventMessageRequestCollection } from './eventmessagerequest.collection';
//#endregion

export class EventMessageRequestModel<E extends EventMessageRequest> extends EventMessageModel<E> {
  //#region ODataApi Properties
  allowNewTimeProposals?: boolean;
  meetingRequestType?: MeetingRequestType;
  previousEndDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  previousLocation?: LocationModel<Location>;
  previousStartDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  responseRequested?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}