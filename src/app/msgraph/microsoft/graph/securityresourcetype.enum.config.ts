import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResourceType } from './securityresourcetype.enum';
//#endregion

export const SecurityResourceTypeConfig = {
  name: "SecurityResourceType",
  members: SecurityResourceType
} as EnumConfig<SecurityResourceType>;