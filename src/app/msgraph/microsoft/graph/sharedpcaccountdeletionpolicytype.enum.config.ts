import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
//#endregion

export const SharedPCAccountDeletionPolicyTypeConfig = {
  name: "sharedPCAccountDeletionPolicyType",
  members: SharedPCAccountDeletionPolicyType
} as EnumConfig<SharedPCAccountDeletionPolicyType>;