import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
//#endregion

export const SharedPCAllowedAccountTypeConfig = {
  name: "sharedPCAllowedAccountType",
  flags: true,
  members: SharedPCAllowedAccountType
} as EnumTypeConfig<SharedPCAllowedAccountType>;