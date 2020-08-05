import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MessageRulePredicates } from './messagerulepredicates.entity';
import { MessageRuleActions } from './messageruleactions.entity';
//#endregion

export interface MessageRule extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  sequence?: number;
  conditions?: MessageRulePredicates;
  actions?: MessageRuleActions;
  exceptions?: MessageRulePredicates;
  isEnabled?: boolean;
  hasError?: boolean;
  isReadOnly?: boolean;
  //#endregion
}