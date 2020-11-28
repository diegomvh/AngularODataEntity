import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { Importance } from './importance.enum';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { Recipient } from './recipient.entity';
import { FollowupFlag } from './followupflag.entity';
import { InternetMessageHeader } from './internetmessageheader.entity';
import { ItemBody } from './itembody.entity';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { RecipientModel } from './recipient.model';
import { FollowupFlagModel } from './followupflag.model';
import { InternetMessageHeaderModel } from './internetmessageheader.model';
import { ItemBodyModel } from './itembody.model';
import { OutlookItemModel } from './outlookitem.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { RecipientCollection } from './recipient.collection';
import { FollowupFlagCollection } from './followupflag.collection';
import { InternetMessageHeaderCollection } from './internetmessageheader.collection';
import { ItemBodyCollection } from './itembody.collection';
import { OutlookItemCollection } from './outlookitem.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
//#endregion

export interface Message extends OutlookItem {
  //#region ODataApi Properties
  bccRecipients?: Recipient[];
  body?: ItemBody;
  bodyPreview?: string;
  ccRecipients?: Recipient[];
  conversationId?: string;
  conversationIndex?: ArrayBuffer;
  flag?: FollowupFlag;
  from?: Recipient;
  hasAttachments?: boolean;
  importance?: Importance;
  inferenceClassification?: InferenceClassificationType;
  internetMessageHeaders?: InternetMessageHeader[];
  internetMessageId?: string;
  isDeliveryReceiptRequested?: boolean;
  isDraft?: boolean;
  isRead?: boolean;
  isReadReceiptRequested?: boolean;
  parentFolderId?: string;
  receivedDateTime?: Date;
  replyTo?: Recipient[];
  sender?: Recipient;
  sentDateTime?: Date;
  subject?: string;
  toRecipients?: Recipient[];
  uniqueBody?: ItemBody;
  webLink?: string;
  attachments?: Attachment[];
  extensions?: Extension[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}