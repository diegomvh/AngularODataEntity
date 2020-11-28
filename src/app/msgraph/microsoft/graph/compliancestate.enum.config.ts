import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceState } from './compliancestate.enum';
//#endregion

export const ComplianceStateConfig = {
  name: "complianceState",
  members: ComplianceState
} as EnumTypeConfig<ComplianceState>;