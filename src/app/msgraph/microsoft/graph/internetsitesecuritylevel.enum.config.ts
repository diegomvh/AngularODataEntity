import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
//#endregion

export const InternetSiteSecurityLevelConfig = {
  name: "InternetSiteSecurityLevel",
  members: InternetSiteSecurityLevel
} as EnumConfig<InternetSiteSecurityLevel>;