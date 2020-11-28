import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
//#endregion

export const SiteSecurityLevelConfig = {
  name: "siteSecurityLevel",
  members: SiteSecurityLevel
} as EnumTypeConfig<SiteSecurityLevel>;