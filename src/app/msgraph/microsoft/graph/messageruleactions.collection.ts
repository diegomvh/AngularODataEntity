import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { Recipient } from './recipient.complex';
import { MessageRuleActions } from './messageruleactions.complex';
import { RecipientModel } from './recipient.model';
import { MessageRuleActionsModel } from './messageruleactions.model';
import { RecipientCollection } from './recipient.collection';
//#endregion

export class MessageRuleActionsCollection<E extends MessageRuleActions, M extends MessageRuleActionsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}