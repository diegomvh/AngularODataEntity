import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
//#endregion

export const UserAccountSecurityTypeConfig = {
  name: "UserAccountSecurityType",
  members: UserAccountSecurityType
} as EnumConfig<UserAccountSecurityType>;