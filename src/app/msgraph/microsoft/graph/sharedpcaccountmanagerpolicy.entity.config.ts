import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.entity';
import { SharedPCAccountManagerPolicyModel } from './sharedpcaccountmanagerpolicy.model';
import { SharedPCAccountManagerPolicyCollection } from './sharedpcaccountmanagerpolicy.collection';
//#endregion

export const SharedPCAccountManagerPolicyConfig = {
  name: "sharedPCAccountManagerPolicy",
  model: SharedPCAccountManagerPolicyModel,
  collection: SharedPCAccountManagerPolicyCollection,
  annotations: [],
  fields: {
    accountDeletionPolicy: {type: 'graph.sharedPCAccountDeletionPolicyType', nullable: false},
    cacheAccountsAboveDiskFreePercentage: {type: 'Edm.Int32'},
    inactiveThresholdDays: {type: 'Edm.Int32'},
    removeAccountsBelowDiskFreePercentage: {type: 'Edm.Int32'}
  }
} as EntityConfig<SharedPCAccountManagerPolicy>;