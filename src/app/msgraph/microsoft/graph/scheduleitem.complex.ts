import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export interface ScheduleItem {
  //#region ODataApi Properties
  end?: DateTimeTimeZone;
  isPrivate?: boolean;
  location?: string;
  start?: DateTimeTimeZone;
  status?: FreeBusyStatus;
  subject?: string;
  //#endregion
}