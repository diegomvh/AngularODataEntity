import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { Location } from './location.entity';
//#endregion

export interface Reminder {
  //#region ODataApi Properties
  eventId?: string;
  eventStartTime?: DateTimeTimeZone;
  eventEndTime?: DateTimeTimeZone;
  changeKey?: string;
  eventSubject?: string;
  eventLocation?: Location;
  eventWebLink?: string;
  reminderFireTime?: DateTimeTimeZone;
  //#endregion
}