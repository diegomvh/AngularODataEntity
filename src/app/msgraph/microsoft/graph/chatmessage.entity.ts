import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ChatMessageType } from './chatmessagetype.enum';
import { ChatMessageImportance } from './chatmessageimportance.enum';
import { IdentitySet } from './identityset.entity';
import { ItemBody } from './itembody.entity';
import { ChatMessageAttachment } from './chatmessageattachment.entity';
import { ChatMessageMention } from './chatmessagemention.entity';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.entity';
import { ChatMessageReaction } from './chatmessagereaction.entity';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
//#endregion

export interface ChatMessage extends Entity {
  //#region ODataApi Properties
  replyToId?: string;
  from?: IdentitySet;
  etag?: string;
  messageType: ChatMessageType;
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  deletedDateTime?: Date;
  subject?: string;
  body: ItemBody;
  summary?: string;
  attachments?: ChatMessageAttachment[];
  mentions?: ChatMessageMention[];
  importance: ChatMessageImportance;
  policyViolation?: ChatMessagePolicyViolation;
  reactions?: ChatMessageReaction[];
  locale: string;
  webUrl?: string;
  replies?: ChatMessage[];
  hostedContents?: ChatMessageHostedContent[];
  //#endregion
}