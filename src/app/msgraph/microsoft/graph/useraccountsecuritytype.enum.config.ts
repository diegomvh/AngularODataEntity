import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
//#endregion

export const UserAccountSecurityTypeConfig = {
  name: "userAccountSecurityType",
  members: UserAccountSecurityType
} as EnumTypeConfig<UserAccountSecurityType>;