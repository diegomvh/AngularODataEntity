import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
import { MeetingRequestType } from './meetingrequesttype.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { EventMessageModel } from './eventmessage.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { EventMessageCollection } from './eventmessage.collection';
//#endregion

export interface EventMessageRequest extends EventMessage {
  //#region ODataApi Properties
  allowNewTimeProposals?: boolean;
  meetingRequestType?: MeetingRequestType;
  previousEndDateTime?: DateTimeTimeZone;
  previousLocation?: Location;
  previousStartDateTime?: DateTimeTimeZone;
  responseRequested?: boolean;
  //#endregion
}