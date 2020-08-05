import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeBase } from './attendeebase.entity';
//#endregion

export interface AttendeeAvailability {
  //#region ODataApi Properties
  attendee?: AttendeeBase;
  availability?: FreeBusyStatus;
  //#endregion
}