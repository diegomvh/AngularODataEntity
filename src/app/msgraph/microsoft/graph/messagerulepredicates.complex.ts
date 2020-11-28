import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { MessageActionFlag } from './messageactionflag.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.complex';
import { SizeRange } from './sizerange.complex';
import { RecipientModel } from './recipient.model';
import { SizeRangeModel } from './sizerange.model';
import { RecipientCollection } from './recipient.collection';
import { SizeRangeCollection } from './sizerange.collection';
//#endregion

export interface MessageRulePredicates {
  //#region ODataApi Properties
  bodyContains?: string[];
  bodyOrSubjectContains?: string[];
  categories?: string[];
  fromAddresses?: Recipient[];
  hasAttachments?: boolean;
  headerContains?: string[];
  importance?: Importance;
  isApprovalRequest?: boolean;
  isAutomaticForward?: boolean;
  isAutomaticReply?: boolean;
  isEncrypted?: boolean;
  isMeetingRequest?: boolean;
  isMeetingResponse?: boolean;
  isNonDeliveryReport?: boolean;
  isPermissionControlled?: boolean;
  isReadReceipt?: boolean;
  isSigned?: boolean;
  isVoicemail?: boolean;
  messageActionFlag?: MessageActionFlag;
  notSentToMe?: boolean;
  recipientContains?: string[];
  senderContains?: string[];
  sensitivity?: Sensitivity;
  sentCcMe?: boolean;
  sentOnlyToMe?: boolean;
  sentToAddresses?: Recipient[];
  sentToMe?: boolean;
  sentToOrCcMe?: boolean;
  subjectContains?: string[];
  withinSizeRange?: SizeRange;
  //#endregion
}