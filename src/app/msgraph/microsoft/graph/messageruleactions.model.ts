import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Importance } from './importance.enum';
import { Recipient } from './recipient.complex';
import { MessageRuleActions } from './messageruleactions.complex';
import { RecipientModel } from './recipient.model';
import { RecipientCollection } from './recipient.collection';
import { MessageRuleActionsCollection } from './messageruleactions.collection';
//#endregion

export class MessageRuleActionsModel<E extends MessageRuleActions> extends ODataModel<E> {
  //#region ODataApi Properties
  assignCategories?: string[];
  copyToFolder?: string;
  delete?: boolean;
  forwardAsAttachmentTo?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  forwardTo?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  markAsRead?: boolean;
  markImportance?: Importance;
  moveToFolder?: string;
  permanentDelete?: boolean;
  redirectTo?: RecipientCollection<Recipient, RecipientModel<Recipient>>;
  stopProcessingRules?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}