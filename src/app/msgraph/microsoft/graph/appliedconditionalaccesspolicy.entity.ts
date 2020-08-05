import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
//#endregion

export interface AppliedConditionalAccessPolicy {
  //#region ODataApi Properties
  id?: string;
  displayName?: string;
  enforcedGrantControls?: string[];
  enforcedSessionControls?: string[];
  result?: AppliedConditionalAccessPolicyResult;
  //#endregion
}