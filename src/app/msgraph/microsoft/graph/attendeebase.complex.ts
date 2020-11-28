import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.complex';
import { AttendeeType } from './attendeetype.enum';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export interface AttendeeBase extends Recipient {
  //#region ODataApi Properties
  type?: AttendeeType;
  //#endregion
}