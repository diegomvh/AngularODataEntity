import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyPlatformType } from './policyplatformtype.enum';
//#endregion

export const PolicyPlatformTypeConfig = {
  name: "policyPlatformType",
  members: PolicyPlatformType
} as EnumTypeConfig<PolicyPlatformType>;