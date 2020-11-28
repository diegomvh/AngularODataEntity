import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
import { EventType } from './eventtype.enum';
import { MeetingMessageType } from './meetingmessagetype.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { Event } from './event.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { EventModel } from './event.model';
import { MessageModel } from './message.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { EventCollection } from './event.collection';
import { MessageCollection } from './message.collection';
//#endregion

export interface EventMessage extends Message {
  //#region ODataApi Properties
  endDateTime?: DateTimeTimeZone;
  isAllDay?: boolean;
  isDelegated?: boolean;
  isOutOfDate?: boolean;
  location?: Location;
  meetingMessageType?: MeetingMessageType;
  recurrence?: PatternedRecurrence;
  startDateTime?: DateTimeTimeZone;
  type?: EventType;
  event?: Event;
  //#endregion
}