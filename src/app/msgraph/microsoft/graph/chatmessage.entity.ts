import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ChatMessageImportance } from './chatmessageimportance.enum';
import { ChatMessageType } from './chatmessagetype.enum';
import { IdentitySet } from './identityset.complex';
import { ItemBody } from './itembody.complex';
import { ChatMessageAttachment } from './chatmessageattachment.complex';
import { ChatMessageMention } from './chatmessagemention.complex';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.complex';
import { ChatMessageReaction } from './chatmessagereaction.complex';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemBodyModel } from './itembody.model';
import { ChatMessageAttachmentModel } from './chatmessageattachment.model';
import { ChatMessageMentionModel } from './chatmessagemention.model';
import { ChatMessagePolicyViolationModel } from './chatmessagepolicyviolation.model';
import { ChatMessageReactionModel } from './chatmessagereaction.model';
import { EntityModel } from './entity.model';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageHostedContentModel } from './chatmessagehostedcontent.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ChatMessageAttachmentCollection } from './chatmessageattachment.collection';
import { ChatMessageMentionCollection } from './chatmessagemention.collection';
import { ChatMessagePolicyViolationCollection } from './chatmessagepolicyviolation.collection';
import { ChatMessageReactionCollection } from './chatmessagereaction.collection';
import { EntityCollection } from './entity.collection';
import { ChatMessageCollection } from './chatmessage.collection';
import { ChatMessageHostedContentCollection } from './chatmessagehostedcontent.collection';
//#endregion

export interface ChatMessage extends Entity {
  //#region ODataApi Properties
  attachments?: ChatMessageAttachment[];
  body: ItemBody;
  createdDateTime?: Date;
  deletedDateTime?: Date;
  etag?: string;
  from?: IdentitySet;
  importance: ChatMessageImportance;
  lastEditedDateTime?: Date;
  lastModifiedDateTime?: Date;
  locale: string;
  mentions?: ChatMessageMention[];
  messageType: ChatMessageType;
  policyViolation?: ChatMessagePolicyViolation;
  reactions?: ChatMessageReaction[];
  replyToId?: string;
  subject?: string;
  summary?: string;
  webUrl?: string;
  hostedContents?: ChatMessageHostedContent[];
  replies?: ChatMessage[];
  //#endregion
}