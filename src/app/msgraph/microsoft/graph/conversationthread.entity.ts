import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Recipient } from './recipient.entity';
import { Post } from './post.entity';
import { RecipientModel } from './recipient.model';
import { EntityModel } from './entity.model';
import { PostModel } from './post.model';
import { RecipientCollection } from './recipient.collection';
import { EntityCollection } from './entity.collection';
import { PostCollection } from './post.collection';
//#endregion

export interface ConversationThread extends Entity {
  //#region ODataApi Properties
  ccRecipients: Recipient[];
  hasAttachments: boolean;
  isLocked: boolean;
  lastDeliveredDateTime: Date;
  preview: string;
  topic: string;
  toRecipients: Recipient[];
  uniqueSenders: string[];
  posts?: Post[];
  //#endregion
}