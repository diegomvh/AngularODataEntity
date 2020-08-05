import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyPlatformType } from './policyplatformtype.enum';
//#endregion

export const PolicyPlatformTypeConfig = {
  name: "PolicyPlatformType",
  members: PolicyPlatformType
} as EnumConfig<PolicyPlatformType>;