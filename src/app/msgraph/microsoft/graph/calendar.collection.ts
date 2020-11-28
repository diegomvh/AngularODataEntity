import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
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
import { CalendarModel } from './calendar.model';
import { EventModel } from './event.model';
import { CalendarPermissionModel } from './calendarpermission.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { ScheduleInformationCollection } from './scheduleinformation.collection';
import { EventCollection } from './event.collection';
import { CalendarPermissionCollection } from './calendarpermission.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export class CalendarCollection<E extends Calendar, M extends CalendarModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}