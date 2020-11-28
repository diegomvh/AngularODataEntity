import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { SharedPCAllowedAccountType } from './sharedpcallowedaccounttype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
import { SharedPCConfiguration } from './sharedpcconfiguration.entity';
import { SharedPCAccountManagerPolicyModel } from './sharedpcaccountmanagerpolicy.model';
import { SharedPCAccountManagerPolicyCollection } from './sharedpcaccountmanagerpolicy.collection';
import { SharedPCConfigurationCollection } from './sharedpcconfiguration.collection';
//#endregion

export class SharedPCConfigurationModel<E extends SharedPCConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  accountManagerPolicy?: SharedPCAccountManagerPolicyModel<SharedPCAccountManagerPolicy>;
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}