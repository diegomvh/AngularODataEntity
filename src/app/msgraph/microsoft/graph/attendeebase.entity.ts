import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.entity';
import { AttendeeType } from './attendeetype.enum';
//#endregion

export interface AttendeeBase extends Recipient {
  //#region ODataApi Properties
  type?: AttendeeType;
  //#endregion
}