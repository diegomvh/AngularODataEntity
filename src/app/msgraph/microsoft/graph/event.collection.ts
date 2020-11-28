import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookItemCollection } from './outlookitem.collection';
import { FreeBusyStatus } from './freebusystatus.enum';
import { EventType } from './eventtype.enum';
import { Importance } from './importance.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.entity';
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { TimeSlot } from './timeslot.entity';
import { Attendee } from './attendee.entity';
import { ResponseStatus } from './responsestatus.entity';
import { ItemBody } from './itembody.entity';
import { OnlineMeetingInfo } from './onlinemeetinginfo.entity';
import { PatternedRecurrence } from './patternedrecurrence.entity';
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
import { EventModel } from './event.model';
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
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class EventCollection<E extends Event, M extends EventModel<E>> extends OutlookItemCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}