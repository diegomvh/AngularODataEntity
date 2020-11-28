import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MessageRuleActions } from './messageruleactions.entity';
import { MessageRulePredicates } from './messagerulepredicates.entity';
import { MessageRuleActionsModel } from './messageruleactions.model';
import { MessageRulePredicatesModel } from './messagerulepredicates.model';
import { EntityModel } from './entity.model';
import { MessageRuleActionsCollection } from './messageruleactions.collection';
import { MessageRulePredicatesCollection } from './messagerulepredicates.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface MessageRule extends Entity {
  //#region ODataApi Properties
  actions?: MessageRuleActions;
  conditions?: MessageRulePredicates;
  displayName?: string;
  exceptions?: MessageRulePredicates;
  hasError?: boolean;
  isEnabled?: boolean;
  isReadOnly?: boolean;
  sequence?: number;
  //#endregion
}