import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ChatMessageImportance } from './chatmessageimportance.enum';
import { ChatMessageType } from './chatmessagetype.enum';
import { IdentitySet } from './identityset.complex';
import { ItemBody } from './itembody.complex';
import { ChatMessageAttachment } from './chatmessageattachment.complex';
import { ChatMessageMention } from './chatmessagemention.complex';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.complex';
import { ChatMessageReaction } from './chatmessagereaction.complex';
import { ChatMessage } from './chatmessage.entity';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemBodyModel } from './itembody.model';
import { ChatMessageAttachmentModel } from './chatmessageattachment.model';
import { ChatMessageMentionModel } from './chatmessagemention.model';
import { ChatMessagePolicyViolationModel } from './chatmessagepolicyviolation.model';
import { ChatMessageReactionModel } from './chatmessagereaction.model';
import { ChatMessageHostedContentModel } from './chatmessagehostedcontent.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ChatMessageAttachmentCollection } from './chatmessageattachment.collection';
import { ChatMessageMentionCollection } from './chatmessagemention.collection';
import { ChatMessagePolicyViolationCollection } from './chatmessagepolicyviolation.collection';
import { ChatMessageReactionCollection } from './chatmessagereaction.collection';
import { ChatMessageCollection } from './chatmessage.collection';
import { ChatMessageHostedContentCollection } from './chatmessagehostedcontent.collection';
//#endregion

export class ChatMessageModel<E extends ChatMessage> extends EntityModel<E> {
  //#region ODataApi Properties
  attachments?: ChatMessageAttachmentCollection<ChatMessageAttachment, ChatMessageAttachmentModel<ChatMessageAttachment>>;
  body: ItemBodyModel<ItemBody>;
  createdDateTime?: Date;
  deletedDateTime?: Date;
  etag?: string;
  from?: IdentitySetModel<IdentitySet>;
  importance: ChatMessageImportance;
  lastEditedDateTime?: Date;
  lastModifiedDateTime?: Date;
  locale: string;
  mentions?: ChatMessageMentionCollection<ChatMessageMention, ChatMessageMentionModel<ChatMessageMention>>;
  messageType: ChatMessageType;
  policyViolation?: ChatMessagePolicyViolationModel<ChatMessagePolicyViolation>;
  reactions?: ChatMessageReactionCollection<ChatMessageReaction, ChatMessageReactionModel<ChatMessageReaction>>;
  replyToId?: string;
  subject?: string;
  summary?: string;
  webUrl?: string;
  hostedContents?: ChatMessageHostedContentCollection<ChatMessageHostedContent, ChatMessageHostedContentModel<ChatMessageHostedContent>>;
  replies?: ChatMessageCollection<ChatMessage, ChatMessageModel<ChatMessage>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}