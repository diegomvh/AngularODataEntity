import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceState } from './compliancestate.enum';
//#endregion

export const ComplianceStateConfig = {
  name: "ComplianceState",
  members: ComplianceState
} as EnumConfig<ComplianceState>;