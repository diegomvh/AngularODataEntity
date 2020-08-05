import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export const ComplianceStatusConfig = {
  name: "complianceStatus",
  members: ComplianceStatus
} as EnumConfig<ComplianceStatus>;