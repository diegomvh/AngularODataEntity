import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecipientScopeType } from './recipientscopetype.enum';
import { EmailAddress } from './emailaddress.entity';
import { Recipient } from './recipient.entity';
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.entity';
import { MailTips } from './mailtips.entity';
import { MailTipsError } from './mailtipserror.entity';
import { EmailAddressModel } from './emailaddress.model';
import { RecipientModel } from './recipient.model';
import { AutomaticRepliesMailTipsModel } from './automaticrepliesmailtips.model';
import { MailTipsErrorModel } from './mailtipserror.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { RecipientCollection } from './recipient.collection';
import { AutomaticRepliesMailTipsCollection } from './automaticrepliesmailtips.collection';
import { MailTipsCollection } from './mailtips.collection';
import { MailTipsErrorCollection } from './mailtipserror.collection';
//#endregion

export class MailTipsModel<E extends MailTips> extends ODataModel<E> {
  //#region ODataApi Properties
  automaticReplies?: AutomaticRepliesMailTipsModel<AutomaticRepliesMailTips>;
  customMailTip?: string;
  deliveryRestricted?: boolean;
  emailAddress?: EmailAddressModel<EmailAddress>;
  error?: MailTipsErrorModel<MailTipsError>;
  externalMemberCount?: number;
  isModerated?: boolean;
  mailboxFull?: boolean;
  maxMessageSize?: number;
  recipientScope?: RecipientScopeType;
  recipientSuggestions?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  totalMemberCount?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}