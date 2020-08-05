import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
//#endregion

export interface SharedPCAccountManagerPolicy {
  //#region ODataApi Properties
  accountDeletionPolicy: SharedPCAccountDeletionPolicyType;
  cacheAccountsAboveDiskFreePercentage?: number;
  inactiveThresholdDays?: number;
  removeAccountsBelowDiskFreePercentage?: number;
  //#endregion
}