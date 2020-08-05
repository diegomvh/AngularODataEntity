import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { Sensitivity } from './sensitivity.enum';
import { MessageActionFlag } from './messageactionflag.enum';
import { Recipient } from './recipient.entity';
import { SizeRange } from './sizerange.entity';
//#endregion

export interface MessageRulePredicates {
  //#region ODataApi Properties
  categories?: string[];
  subjectContains?: string[];
  bodyContains?: string[];
  bodyOrSubjectContains?: string[];
  senderContains?: string[];
  recipientContains?: string[];
  headerContains?: string[];
  messageActionFlag?: MessageActionFlag;
  importance?: Importance;
  sensitivity?: Sensitivity;
  fromAddresses?: Recipient[];
  sentToAddresses?: Recipient[];
  sentToMe?: boolean;
  sentOnlyToMe?: boolean;
  sentCcMe?: boolean;
  sentToOrCcMe?: boolean;
  notSentToMe?: boolean;
  hasAttachments?: boolean;
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
  withinSizeRange?: SizeRange;
  //#endregion
}