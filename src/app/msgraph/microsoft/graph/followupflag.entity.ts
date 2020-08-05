import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FollowupFlagStatus } from './followupflagstatus.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
//#endregion

export interface FollowupFlag {
  //#region ODataApi Properties
  completedDateTime?: DateTimeTimeZone;
  dueDateTime?: DateTimeTimeZone;
  startDateTime?: DateTimeTimeZone;
  flagStatus?: FollowupFlagStatus;
  //#endregion
}