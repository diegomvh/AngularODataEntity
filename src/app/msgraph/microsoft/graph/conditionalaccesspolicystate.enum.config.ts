import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
//#endregion

export const ConditionalAccessPolicyStateConfig = {
  name: "ConditionalAccessPolicyState",
  members: ConditionalAccessPolicyState
} as EnumConfig<ConditionalAccessPolicyState>;