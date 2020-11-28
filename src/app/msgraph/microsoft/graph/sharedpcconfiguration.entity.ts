import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
import { SharedPCAccountManagerPolicyModel } from './sharedpcaccountmanagerpolicy.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { SharedPCAccountManagerPolicyCollection } from './sharedpcaccountmanagerpolicy.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface SharedPCConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  accountManagerPolicy?: SharedPCAccountManagerPolicy;
  allowedAccounts: SharedPCAllowedAccountType;
  allowLocalStorage: boolean;
  disableAccountManager: boolean;
  disableEduPolicies: boolean;
  disablePowerPolicies: boolean;
  disableSignInOnResume: boolean;
  enabled: boolean;
  idleTimeBeforeSleepInSeconds?: number;
  kioskAppDisplayName?: string;
  kioskAppUserModelId?: string;
  maintenanceStartTime?: Date;
  //#endregion
}