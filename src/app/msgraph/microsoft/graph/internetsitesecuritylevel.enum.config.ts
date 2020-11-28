import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
//#endregion

export const InternetSiteSecurityLevelConfig = {
  name: "internetSiteSecurityLevel",
  members: InternetSiteSecurityLevel
} as EnumTypeConfig<InternetSiteSecurityLevel>;