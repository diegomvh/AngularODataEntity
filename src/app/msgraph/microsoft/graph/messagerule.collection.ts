import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MessageRuleActions } from './messageruleactions.complex';
import { MessageRulePredicates } from './messagerulepredicates.complex';
import { MessageRule } from './messagerule.entity';
import { MessageRuleActionsModel } from './messageruleactions.model';
import { MessageRulePredicatesModel } from './messagerulepredicates.model';
import { MessageRuleModel } from './messagerule.model';
import { MessageRuleActionsCollection } from './messageruleactions.collection';
import { MessageRulePredicatesCollection } from './messagerulepredicates.collection';
//#endregion

export class MessageRuleCollection<E extends MessageRule, M extends MessageRuleModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}