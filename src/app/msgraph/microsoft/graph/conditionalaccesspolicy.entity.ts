import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.entity';
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.entity';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.entity';
//#endregion

export interface ConditionalAccessPolicy extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  modifiedDateTime?: Date;
  displayName: string;
  description?: string;
  state: ConditionalAccessPolicyState;
  conditions: ConditionalAccessConditionSet;
  grantControls?: ConditionalAccessGrantControls;
  sessionControls?: ConditionalAccessSessionControls;
  //#endregion
}