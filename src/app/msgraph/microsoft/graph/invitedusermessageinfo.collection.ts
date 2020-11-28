import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
import { Recipient } from './recipient.entity';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export class InvitedUserMessageInfoCollection<E extends InvitedUserMessageInfo, M extends InvitedUserMessageInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}