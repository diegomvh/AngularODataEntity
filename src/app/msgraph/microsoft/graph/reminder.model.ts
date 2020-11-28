import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
import { Reminder } from './reminder.entity';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
import { ReminderCollection } from './reminder.collection';
//#endregion

export class ReminderModel<E extends Reminder> extends ODataModel<E> {
  //#region ODataApi Properties
  changeKey?: string;
  eventEndTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  eventId?: string;
  eventLocation?: LocationModel<Location>;
  eventStartTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  eventSubject?: string;
  eventWebLink?: string;
  reminderFireTime?: DateTimeTimeZoneModel<DateTimeTimeZone>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}