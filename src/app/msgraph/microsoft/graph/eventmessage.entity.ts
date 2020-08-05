import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
import { MeetingMessageType } from './meetingmessagetype.enum';
import { EventType } from './eventtype.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { Event } from './event.entity';
//#endregion

export interface EventMessage extends Message {
  //#region ODataApi Properties
  meetingMessageType?: MeetingMessageType;
  startDateTime?: DateTimeTimeZone;
  endDateTime?: DateTimeTimeZone;
  location?: Location;
  type?: EventType;
  recurrence?: PatternedRecurrence;
  isOutOfDate?: boolean;
  isAllDay?: boolean;
  isDelegated?: boolean;
  event?: Event;
  //#endregion
}