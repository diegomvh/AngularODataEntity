import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
import { MeetingRequestType } from './meetingrequesttype.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
//#endregion

export interface EventMessageRequest extends EventMessage {
  //#region ODataApi Properties
  previousLocation?: Location;
  previousStartDateTime?: DateTimeTimeZone;
  previousEndDateTime?: DateTimeTimeZone;
  responseRequested?: boolean;
  allowNewTimeProposals?: boolean;
  meetingRequestType?: MeetingRequestType;
  //#endregion
}