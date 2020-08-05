import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

export const WebsiteTypeConfig = {
  name: "WebsiteType",
  members: WebsiteType
} as EnumConfig<WebsiteType>;