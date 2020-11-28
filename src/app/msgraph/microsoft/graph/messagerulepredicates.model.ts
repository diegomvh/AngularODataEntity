import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { MessageActionFlag } from './messageactionflag.enum';
import { Sensitivity } from './sensitivity.enum';
import { Recipient } from './recipient.entity';
import { MessageRulePredicates } from './messagerulepredicates.entity';
import { SizeRange } from './sizerange.entity';
import { RecipientModel } from './recipient.model';
import { SizeRangeModel } from './sizerange.model';
import { RecipientCollection } from './recipient.collection';
import { MessageRulePredicatesCollection } from './messagerulepredicates.collection';
import { SizeRangeCollection } from './sizerange.collection';
//#endregion

export class MessageRulePredicatesModel<E extends MessageRulePredicates> extends ODataModel<E> {
  //#region ODataApi Properties
  bodyContains?: string[];
  bodyOrSubjectContains?: string[];
  categories?: string[];
  fromAddresses?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
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
  sentToAddresses?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  sentToMe?: boolean;
  sentToOrCcMe?: boolean;
  subjectContains?: string[];
  withinSizeRange?: SizeRangeModel<SizeRange>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}