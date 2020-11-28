import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MessageModel } from './message.model';
import { EventType } from './eventtype.enum';
import { MeetingMessageType } from './meetingmessagetype.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { Event } from './event.entity';
import { EventMessage } from './eventmessage.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { EventModel } from './event.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { EventCollection } from './event.collection';
import { EventMessageCollection } from './eventmessage.collection';
//#endregion

export class EventMessageModel<E extends EventMessage> extends MessageModel<E> {
  //#region ODataApi Properties
  endDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  isAllDay?: boolean;
  isDelegated?: boolean;
  isOutOfDate?: boolean;
  location?: LocationModel<Location>;
  meetingMessageType?: MeetingMessageType;
  recurrence?: PatternedRecurrenceModel<PatternedRecurrence>;
  startDateTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  type?: EventType;
  event?: EventModel<Event>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}