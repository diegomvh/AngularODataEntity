import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConversationThread } from './conversationthread.entity';
//#endregion

export interface Conversation extends Entity {
  //#region ODataApi Properties
  topic: string;
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  uniqueSenders: string[];
  preview: string;
  threads?: ConversationThread[];
  //#endregion
}