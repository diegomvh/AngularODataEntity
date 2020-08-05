import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Recipient } from './recipient.entity';
//#endregion

export interface InvitedUserMessageInfo {
  //#region ODataApi Properties
  ccRecipients?: Recipient[];
  messageLanguage?: string;
  customizedMessageBody?: string;
  //#endregion
}