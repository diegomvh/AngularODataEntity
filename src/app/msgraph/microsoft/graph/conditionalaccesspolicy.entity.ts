import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
import { ConditionalAccessConditionSet } from './conditionalaccessconditionset.complex';
import { ConditionalAccessGrantControls } from './conditionalaccessgrantcontrols.complex';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.complex';
import { ConditionalAccessConditionSetModel } from './conditionalaccessconditionset.model';
import { ConditionalAccessGrantControlsModel } from './conditionalaccessgrantcontrols.model';
import { ConditionalAccessSessionControlsModel } from './conditionalaccesssessioncontrols.model';
import { EntityModel } from './entity.model';
import { ConditionalAccessConditionSetCollection } from './conditionalaccessconditionset.collection';
import { ConditionalAccessGrantControlsCollection } from './conditionalaccessgrantcontrols.collection';
import { ConditionalAccessSessionControlsCollection } from './conditionalaccesssessioncontrols.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ConditionalAccessPolicy extends Entity {
  //#region ODataApi Properties
  conditions: ConditionalAccessConditionSet;
  createdDateTime?: Date;
  description?: string;
  displayName: string;
  grantControls?: ConditionalAccessGrantControls;
  modifiedDateTime?: Date;
  sessionControls?: ConditionalAccessSessionControls;
  state: ConditionalAccessPolicyState;
  //#endregion
}