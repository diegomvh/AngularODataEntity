import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MessageCollection } from './message.collection';
import { EventType } from './eventtype.enum';
import { MeetingMessageType } from './meetingmessagetype.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { Event } from './event.entity';
import { EventMessage } from './eventmessage.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { EventModel } from './event.model';
import { EventMessageModel } from './eventmessage.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { EventCollection } from './event.collection';
//#endregion

export class EventMessageCollection<E extends EventMessage, M extends EventMessageModel<E>> extends MessageCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}