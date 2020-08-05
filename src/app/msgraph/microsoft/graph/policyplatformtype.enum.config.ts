import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyPlatformType } from './policyplatformtype.enum';
//#endregion

export const PolicyPlatformTypeConfig = {
  name: "policyPlatformType",
  members: PolicyPlatformType
} as EnumConfig<PolicyPlatformType>;