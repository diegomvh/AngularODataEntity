import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.entity';
//#endregion

export const SharedPCAccountManagerPolicyConfig = {
  name: "sharedPCAccountManagerPolicy",
  annotations: [],
  fields: {
    accountDeletionPolicy: {type: 'graph.sharedPCAccountDeletionPolicyType', nullable: false},
    cacheAccountsAboveDiskFreePercentage: {type: 'Edm.Int32'},
    inactiveThresholdDays: {type: 'Edm.Int32'},
    removeAccountsBelowDiskFreePercentage: {type: 'Edm.Int32'}
  }
} as EntityConfig<SharedPCAccountManagerPolicy>;