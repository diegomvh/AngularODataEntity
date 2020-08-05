import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecipientScopeType } from './recipientscopetype.enum';
import { Recipient } from './recipient.entity';
import { EmailAddress } from './emailaddress.entity';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.entity';
import { MailTipsError } from './mailtipserror.entity';
//#endregion

export interface MailTips {
  //#region ODataApi Properties
  emailAddress?: EmailAddress;
  automaticReplies?: AutomaticRepliesMailTips;
  mailboxFull?: boolean;
  customMailTip?: string;
  externalMemberCount?: number;
  totalMemberCount?: number;
  deliveryRestricted?: boolean;
  isModerated?: boolean;
  recipientScope?: RecipientScopeType;
  recipientSuggestions?: Recipient[];
  maxMessageSize?: number;
  error?: MailTipsError;
  //#endregion
}