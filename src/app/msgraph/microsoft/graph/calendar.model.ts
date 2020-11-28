import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { CalendarColor } from './calendarcolor.enum';
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
import { EmailAddress } from './emailaddress.complex';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { ScheduleInformation } from './scheduleinformation.complex';
import { Calendar } from './calendar.entity';
import { Event } from './event.entity';
import { CalendarPermission } from './calendarpermission.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { EmailAddressModel } from './emailaddress.model';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { ScheduleInformationModel } from './scheduleinformation.model';
import { EventModel } from './event.model';
import { CalendarPermissionModel } from './calendarpermission.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ScheduleInformationCollection } from './scheduleinformation.collection';
import { CalendarCollection } from './calendar.collection';
import { EventCollection } from './event.collection';
import { CalendarPermissionCollection } from './calendarpermission.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class CalendarModel<E extends Calendar> extends EntityModel<E> {
  //#region ODataApi Properties
  allowedOnlineMeetingProviders?: OnlineMeetingProviderType;
  canEdit?: boolean;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  changeKey?: string;
  color?: CalendarColor;
  defaultOnlineMeetingProvider?: OnlineMeetingProviderType;
  hexColor?: string;
  isDefaultCalendar?: boolean;
  isRemovable?: boolean;
  isTallyingResponses?: boolean;
  name?: string;
  owner?: EmailAddressModel<EmailAddress>;
  calendarPermissions?: CalendarPermissionCollection<CalendarPermission, CalendarPermissionModel<CalendarPermission>>;
  calendarView?: EventCollection<Event, EventModel<Event>>;
  events?: EventCollection<Event, EventModel<Event>>;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollection<MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyModel<MultiValueLegacyExtendedProperty>>;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollection<SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyModel<SingleValueLegacyExtendedProperty>>;
  //#endregion
  //#region ODataApi Actions
  public getSchedule(Schedules: string[], EndTime: DateTimeTimeZone, StartTime: DateTimeTimeZone, AvailabilityViewInterval: number, options?: HttpOptions): Observable<ScheduleInformationCollection<ScheduleInformation, ScheduleInformationModel<ScheduleInformation>>> {
    var res = this._action<{Schedules: string[], EndTime: DateTimeTimeZone, StartTime: DateTimeTimeZone, AvailabilityViewInterval: number}, ScheduleInformation>('microsoft.graph.getSchedule');
    res.segment.entitySet('');
    return res.call({Schedules, EndTime, StartTime, AvailabilityViewInterval}, 'collection', options) as Observable<ScheduleInformationCollection<ScheduleInformation, ScheduleInformationModel<ScheduleInformation>>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}