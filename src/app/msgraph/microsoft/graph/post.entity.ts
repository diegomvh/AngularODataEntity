import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { Recipient } from './recipient.complex';
import { ItemBody } from './itembody.complex';
import { Extension } from './extension.entity';
import { Attachment } from './attachment.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { RecipientModel } from './recipient.model';
import { ItemBodyModel } from './itembody.model';
import { OutlookItemModel } from './outlookitem.model';
import { ExtensionModel } from './extension.model';
import { AttachmentModel } from './attachment.model';
import { MultiValueLegacyExtendedPropertyModel } from './multivaluelegacyextendedproperty.model';
import { SingleValueLegacyExtendedPropertyModel } from './singlevaluelegacyextendedproperty.model';
import { PostModel } from './post.model';
import { RecipientCollection } from './recipient.collection';
import { ItemBodyCollection } from './itembody.collection';
import { OutlookItemCollection } from './outlookitem.collection';
import { ExtensionCollection } from './extension.collection';
import { AttachmentCollection } from './attachment.collection';
import { MultiValueLegacyExtendedPropertyCollection } from './multivaluelegacyextendedproperty.collection';
import { SingleValueLegacyExtendedPropertyCollection } from './singlevaluelegacyextendedproperty.collection';
import { PostCollection } from './post.collection';
//#endregion

export interface Post extends OutlookItem {
  //#region ODataApi Properties
  body?: ItemBody;
  conversationId?: string;
  conversationThreadId?: string;
  from: Recipient;
  hasAttachments: boolean;
  newParticipants: Recipient[];
  receivedDateTime: Date;
  sender?: Recipient;
  attachments?: Attachment[];
  extensions?: Extension[];
  inReplyTo?: Post;
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  //#endregion
}