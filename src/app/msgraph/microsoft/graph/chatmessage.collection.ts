import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ChatMessageImportance } from './chatmessageimportance.enum';
import { ChatMessageType } from './chatmessagetype.enum';
import { IdentitySet } from './identityset.entity';
import { ItemBody } from './itembody.entity';
import { ChatMessageAttachment } from './chatmessageattachment.entity';
import { ChatMessageMention } from './chatmessagemention.entity';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.entity';
import { ChatMessageReaction } from './chatmessagereaction.entity';
import { ChatMessage } from './chatmessage.entity';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemBodyModel } from './itembody.model';
import { ChatMessageAttachmentModel } from './chatmessageattachment.model';
import { ChatMessageMentionModel } from './chatmessagemention.model';
import { ChatMessagePolicyViolationModel } from './chatmessagepolicyviolation.model';
import { ChatMessageReactionModel } from './chatmessagereaction.model';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageHostedContentModel } from './chatmessagehostedcontent.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemBodyCollection } from './itembody.collection';
import { ChatMessageAttachmentCollection } from './chatmessageattachment.collection';
import { ChatMessageMentionCollection } from './chatmessagemention.collection';
import { ChatMessagePolicyViolationCollection } from './chatmessagepolicyviolation.collection';
import { ChatMessageReactionCollection } from './chatmessagereaction.collection';
import { ChatMessageHostedContentCollection } from './chatmessagehostedcontent.collection';
//#endregion

export class ChatMessageCollection<E extends ChatMessage, M extends ChatMessageModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}