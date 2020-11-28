import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export interface FollowupFlag {
  //#region ODataApi Properties
  completedDateTime?: DateTimeTimeZone;
  dueDateTime?: DateTimeTimeZone;
  flagStatus?: FollowupFlagStatus;
  startDateTime?: DateTimeTimeZone;
  //#endregion
}