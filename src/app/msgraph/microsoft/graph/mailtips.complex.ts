import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RecipientScopeType } from './recipientscopetype.enum';
import { EmailAddress } from './emailaddress.complex';
import { Recipient } from './recipient.complex';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.complex';
import { MailTipsError } from './mailtipserror.complex';
import { EmailAddressModel } from './emailaddress.model';
import { RecipientModel } from './recipient.model';
import { AutomaticRepliesMailTipsModel } from './automaticrepliesmailtips.model';
import { MailTipsErrorModel } from './mailtipserror.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { RecipientCollection } from './recipient.collection';
import { AutomaticRepliesMailTipsCollection } from './automaticrepliesmailtips.collection';
import { MailTipsErrorCollection } from './mailtipserror.collection';
//#endregion

export interface MailTips {
  //#region ODataApi Properties
  automaticReplies?: AutomaticRepliesMailTips;
  customMailTip?: string;
  deliveryRestricted?: boolean;
  emailAddress?: EmailAddress;
  error?: MailTipsError;
  externalMemberCount?: number;
  isModerated?: boolean;
  mailboxFull?: boolean;
  maxMessageSize?: number;
  recipientScope?: RecipientScopeType;
  recipientSuggestions?: Recipient[];
  totalMemberCount?: number;
  //#endregion
}