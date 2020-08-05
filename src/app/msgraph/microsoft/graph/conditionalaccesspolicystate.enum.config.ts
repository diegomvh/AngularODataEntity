import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPolicyState } from './conditionalaccesspolicystate.enum';
//#endregion

export const ConditionalAccessPolicyStateConfig = {
  name: "conditionalAccessPolicyState",
  members: ConditionalAccessPolicyState
} as EnumConfig<ConditionalAccessPolicyState>;