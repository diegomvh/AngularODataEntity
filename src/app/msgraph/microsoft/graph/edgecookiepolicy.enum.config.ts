import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeCookiePolicy } from './edgecookiepolicy.enum';
//#endregion

export const EdgeCookiePolicyConfig = {
  name: "EdgeCookiePolicy",
  members: EdgeCookiePolicy
} as EnumConfig<EdgeCookiePolicy>;