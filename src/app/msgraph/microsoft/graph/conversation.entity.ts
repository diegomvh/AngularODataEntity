import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConversationThread } from './conversationthread.entity';
import { EntityModel } from './entity.model';
import { ConversationThreadModel } from './conversationthread.model';
import { EntityCollection } from './entity.collection';
import { ConversationThreadCollection } from './conversationthread.collection';
//#endregion

export interface Conversation extends Entity {
  //#region ODataApi Properties
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  preview: string;
  topic: string;
  uniqueSenders: string[];
  threads?: ConversationThread[];
  //#endregion
}