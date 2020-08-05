import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ChatInfo {
  //#region ODataApi Properties
  threadId?: string;
  messageId?: string;
  replyChainMessageId?: string;
  //#endregion
}