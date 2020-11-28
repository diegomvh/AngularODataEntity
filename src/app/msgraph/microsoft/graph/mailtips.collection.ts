import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { MailTipsModel } from './mailtips.model';
import { MailTipsErrorModel } from './mailtipserror.model';
import { EmailAddressCollection } from './emailaddress.collection';
import { RecipientCollection } from './recipient.collection';
import { AutomaticRepliesMailTipsCollection } from './automaticrepliesmailtips.collection';
import { MailTipsErrorCollection } from './mailtipserror.collection';
//#endregion

export class MailTipsCollection<E extends MailTips, M extends MailTipsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}