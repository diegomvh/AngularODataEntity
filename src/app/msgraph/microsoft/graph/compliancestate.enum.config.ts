import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceState } from './compliancestate.enum';
//#endregion

export const ComplianceStateConfig = {
  name: "complianceState",
  members: ComplianceState
} as EnumConfig<ComplianceState>;