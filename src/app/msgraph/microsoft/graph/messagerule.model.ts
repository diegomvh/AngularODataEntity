import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MessageRuleActions } from './messageruleactions.complex';
import { MessageRulePredicates } from './messagerulepredicates.complex';
import { MessageRule } from './messagerule.entity';
import { MessageRuleActionsModel } from './messageruleactions.model';
import { MessageRulePredicatesModel } from './messagerulepredicates.model';
import { MessageRuleActionsCollection } from './messageruleactions.collection';
import { MessageRulePredicatesCollection } from './messagerulepredicates.collection';
import { MessageRuleCollection } from './messagerule.collection';
//#endregion

export class MessageRuleModel<E extends MessageRule> extends EntityModel<E> {
  //#region ODataApi Properties
  actions?: MessageRuleActionsModel<MessageRuleActions>;
  conditions?: MessageRulePredicatesModel<MessageRulePredicates>;
  displayName?: string;
  exceptions?: MessageRulePredicatesModel<MessageRulePredicates>;
  hasError?: boolean;
  isEnabled?: boolean;
  isReadOnly?: boolean;
  sequence?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}