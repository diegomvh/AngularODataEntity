import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
//#endregion

export const SiteSecurityLevelConfig = {
  name: "SiteSecurityLevel",
  members: SiteSecurityLevel
} as EnumConfig<SiteSecurityLevel>;