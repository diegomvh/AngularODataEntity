import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
//#endregion

export interface AppliedConditionalAccessPolicy {
  //#region ODataApi Properties
  displayName?: string;
  enforcedGrantControls?: string[];
  enforcedSessionControls?: string[];
  id?: string;
  result?: AppliedConditionalAccessPolicyResult;
  //#endregion
}