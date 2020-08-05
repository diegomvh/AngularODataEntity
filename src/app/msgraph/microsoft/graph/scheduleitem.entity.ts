import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
//#endregion

export interface ScheduleItem {
  //#region ODataApi Properties
  start?: DateTimeTimeZone;
  end?: DateTimeTimeZone;
  isPrivate?: boolean;
  status?: FreeBusyStatus;
  subject?: string;
  location?: string;
  //#endregion
}