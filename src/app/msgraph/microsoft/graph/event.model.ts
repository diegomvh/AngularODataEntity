import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemModel } from './outlookitem.model';
import { FreeBusyStatus } from './freebusystatus.enum';
import { EventType } from './eventtype.enum';
import { Importance } from './importance.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.complex';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { TimeSlot } from './timeslot.complex';
import { Attendee } from './attendee.complex';
import { ResponseStatus } from './responsestatus.complex';
import { ItemBody } from './itembody.complex';
import { OnlineMeetingInfo } from './onlinemeetinginfo.complex';
import { PatternedRecurrence } from './patternedrecurrence.complex';
import { Calendar } from './calendar.entity';
import { Event } from './event.entity';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { RecipientModel } from './recipient.model';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { TimeSlotModel } from './timeslot.model';
import { AttendeeModel } from './attendee.model';
import { ResponseStatusModel } from './responsestatus.model';
import { ItemBodyModel } from './itembody.model';
import { OnlineMeetingInfoModel } from './onlinemeetinginfo.model';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { CalendarModel } from './calendar.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { RecipientCollection } from './recipient.collection';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { TimeSlotCollection } from './timeslot.collection';
import { AttendeeCollection } from './attendee.collection';
import { ResponseStatusCollection } from './responsestatus.collection';
import { ItemBodyCollection } from './itembody.collection';
import { OnlineMeetingInfoCollection } from './onlinemeetinginfo.collection';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
import { CalendarCollection } from './calendar.collection';
import { EventCollection } from './event.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class EventModel<E extends Event> extends OutlookItemModel<E> {
  //#region ODataApi Properties
  allowNewTimeProposals?: boolean;
  attendees?: AttendeeCollection<Attendee, AttendeeModel<Attendee>>;
  body?: ItemBodyModel<ItemBody>;
  bodyPreview?: string;
  end?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  hasAttachments?: boolean;
  iCalUId?: string;
  importance?: Importance;
  isAllDay?: boolean;
  isCancelled?: boolean;
  isDraft?: boolean;
  isOnlineMeeting?: boolean;
  isOrganizer?: boolean;
  isReminderOn?: boolean;
  location?: LocationModel<Location>;
  locations?: LocationCollection<Location, LocationModel<Location>>;
  onlineMeeting?: OnlineMeetingInfoModel<OnlineMeetingInfo>;
  onlineMeetingProvider?: OnlineMeetingProviderType;
  onlineMeetingUrl?: string;
  organizer?: RecipientModel<Recipient>;
  originalEndTimeZone?: string;
  originalStart?: Date;
  originalStartTimeZone?: string;
  recurrence?: PatternedRecurrenceModel<PatternedRecurrence>;
  reminderMinutesBeforeStart?: number;
  responseRequested?: boolean;
  responseStatus?: ResponseStatusModel<ResponseStatus>;
  sensitivity?: Sensitivity;
  seriesMasterId?: string;
  showAs?: FreeBusyStatus;
  start?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  subject?: string;
  transactionId?: string;
  type?: EventType;
  webLink?: string;
  attachments?: AttachmentCollection<Attachment, AttachmentModel<Attachment>>;
  calendar?: CalendarModel<Calendar>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  instances?: EventCollection<Event, EventModel<Event>>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  public accept(SendResponse: boolean, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{SendResponse: boolean, Comment: string}, any>('microsoft.graph.accept');
    res.segment.entitySet('');
    return res.call({SendResponse, Comment}, 'property', options) as Observable<any>;
  }
  public cancel(Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{Comment: string}, any>('microsoft.graph.cancel');
    res.segment.entitySet('');
    return res.call({Comment}, 'property', options) as Observable<any>;
  }
  public decline(ProposedNewTime: TimeSlot, SendResponse: boolean, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{ProposedNewTime: TimeSlot, SendResponse: boolean, Comment: string}, any>('microsoft.graph.decline');
    res.segment.entitySet('');
    return res.call({ProposedNewTime, SendResponse, Comment}, 'property', options) as Observable<any>;
  }
  public dismissReminder(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.dismissReminder');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public forward(ToRecipients: Recipient[], Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{ToRecipients: Recipient[], Comment: string}, any>('microsoft.graph.forward');
    res.segment.entitySet('');
    return res.call({ToRecipients, Comment}, 'property', options) as Observable<any>;
  }
  public snoozeReminder(NewReminderTime: DateTimeTimeZone, options?: HttpOptions): Observable<any> {
    var res = this._action<{NewReminderTime: DateTimeTimeZone}, any>('microsoft.graph.snoozeReminder');
    res.segment.entitySet('');
    return res.call({NewReminderTime}, 'property', options) as Observable<any>;
  }
  public tentativelyAccept(ProposedNewTime: TimeSlot, SendResponse: boolean, Comment: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{ProposedNewTime: TimeSlot, SendResponse: boolean, Comment: string}, any>('microsoft.graph.tentativelyAccept');
    res.segment.entitySet('');
    return res.call({ProposedNewTime, SendResponse, Comment}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}