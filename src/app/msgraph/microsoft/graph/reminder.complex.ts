import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { Location } from './location.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { LocationModel } from './location.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
import { LocationCollection } from './location.collection';
//#endregion

export interface Reminder {
  //#region ODataApi Properties
  changeKey?: string;
  eventEndTime?: DateTimeTimeZone;
  eventId?: string;
  eventLocation?: Location;
  eventStartTime?: DateTimeTimeZone;
  eventSubject?: string;
  eventWebLink?: string;
  reminderFireTime?: DateTimeTimeZone;
  //#endregion
}