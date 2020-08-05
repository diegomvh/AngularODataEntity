import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharedPCConfiguration } from './sharedpcconfiguration.entity';
//#endregion

export const SharedPCConfigurationConfig = {
  name: "sharedPCConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    accountManagerPolicy: {type: 'graph.sharedPCAccountManagerPolicy'},
    allowedAccounts: {type: 'graph.sharedPCAllowedAccountType', nullable: false},
    allowLocalStorage: {type: 'Edm.Boolean', nullable: false},
    disableAccountManager: {type: 'Edm.Boolean', nullable: false},
    disableEduPolicies: {type: 'Edm.Boolean', nullable: false},
    disablePowerPolicies: {type: 'Edm.Boolean', nullable: false},
    disableSignInOnResume: {type: 'Edm.Boolean', nullable: false},
    enabled: {type: 'Edm.Boolean', nullable: false},
    idleTimeBeforeSleepInSeconds: {type: 'Edm.Int32'},
    kioskAppDisplayName: {type: 'Edm.String'},
    kioskAppUserModelId: {type: 'Edm.String'},
    maintenanceStartTime: {type: 'Edm.TimeOfDay'}
  }
} as EntityConfig<SharedPCConfiguration>;