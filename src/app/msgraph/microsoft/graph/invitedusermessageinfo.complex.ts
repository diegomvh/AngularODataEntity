import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.complex';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export interface InvitedUserMessageInfo {
  //#region ODataApi Properties
  ccRecipients?: Recipient[];
  customizedMessageBody?: string;
  messageLanguage?: string;
  //#endregion
}