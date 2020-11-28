import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
//#endregion

export const AppliedConditionalAccessPolicyResultConfig = {
  name: "appliedConditionalAccessPolicyResult",
  members: AppliedConditionalAccessPolicyResult
} as EnumTypeConfig<AppliedConditionalAccessPolicyResult>;