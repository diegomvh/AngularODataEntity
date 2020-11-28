import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

export const WebsiteTypeConfig = {
  name: "websiteType",
  members: WebsiteType
} as EnumTypeConfig<WebsiteType>;