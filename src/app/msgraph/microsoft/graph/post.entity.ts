import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OutlookItem } from './outlookitem.entity';
import { Recipient } from './recipient.entity';
import { ItemBody } from './itembody.entity';
import { Extension } from './extension.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
import { Attachment } from './attachment.entity';
//#endregion

export interface Post extends OutlookItem {
  //#region ODataApi Properties
  body?: ItemBody;
  receivedDateTime: Date;
  hasAttachments: boolean;
  from: Recipient;
  sender?: Recipient;
  conversationThreadId?: string;
  newParticipants: Recipient[];
  conversationId?: string;
  inReplyTo?: Post;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  extensions?: Extension[];
  attachments?: Attachment[];
  //#endregion
}