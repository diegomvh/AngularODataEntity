import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
import { AttendeeBase } from './attendeebase.complex';
import { AttendeeBaseModel } from './attendeebase.model';
import { AttendeeBaseCollection } from './attendeebase.collection';
//#endregion

export interface AttendeeAvailability {
  //#region ODataApi Properties
  attendee?: AttendeeBase;
  availability?: FreeBusyStatus;
  //#endregion
}