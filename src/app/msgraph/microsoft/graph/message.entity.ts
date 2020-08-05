import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { Importance } from './importance.enum';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { Recipient } from './recipient.entity';
import { InternetMessageHeader } from './internetmessageheader.entity';
import { ItemBody } from './itembody.entity';
import { FollowupFlag } from './followupflag.entity';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { Attachment } from './attachment.entity';
//#endregion

export interface Message extends OutlookItem {
  //#region ODataApi Properties
  receivedDateTime?: Date;
  sentDateTime?: Date;
  hasAttachments?: boolean;
  internetMessageId?: string;
  internetMessageHeaders?: InternetMessageHeader[];
  subject?: string;
  body?: ItemBody;
  bodyPreview?: string;
  importance?: Importance;
  parentFolderId?: string;
  sender?: Recipient;
  from?: Recipient;
  toRecipients?: Recipient[];
  ccRecipients?: Recipient[];
  bccRecipients?: Recipient[];
  replyTo?: Recipient[];
  conversationId?: string;
  conversationIndex?: ArrayBuffer;
  uniqueBody?: ItemBody;
  isDeliveryReceiptRequested?: boolean;
  isReadReceiptRequested?: boolean;
  isRead?: boolean;
  isDraft?: boolean;
  webLink?: string;
  inferenceClassification?: InferenceClassificationType;
  flag?: FollowupFlag;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  attachments?: Attachment[];
  extensions?: Extension[];
  //#endregion
}