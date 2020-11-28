import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
import { Recipient } from './recipient.entity';
import { RecipientModel } from './recipient.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
import { RecipientCollection } from './recipient.collection';
//#endregion

export class InvitedUserMessageInfoModel<E extends InvitedUserMessageInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  ccRecipients?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  customizedMessageBody?: string;
  messageLanguage?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}