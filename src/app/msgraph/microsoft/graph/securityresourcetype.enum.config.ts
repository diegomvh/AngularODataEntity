import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResourceType } from './securityresourcetype.enum';
//#endregion

export const SecurityResourceTypeConfig = {
  name: "securityResourceType",
  members: SecurityResourceType
} as EnumConfig<SecurityResourceType>;