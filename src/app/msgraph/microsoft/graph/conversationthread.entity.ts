import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Recipient } from './recipient.entity';
import { Post } from './post.entity';
//#endregion

export interface ConversationThread extends Entity {
  //#region ODataApi Properties
  toRecipients: Recipient[];
  topic: string;
  hasAttachments: boolean;
  lastDeliveredDateTime: Date;
  uniqueSenders: string[];
  ccRecipients: Recipient[];
  preview: string;
  isLocked: boolean;
  posts?: Post[];
  //#endregion
}