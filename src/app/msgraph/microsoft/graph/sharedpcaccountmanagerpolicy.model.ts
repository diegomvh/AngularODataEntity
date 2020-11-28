import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
import { SharedPCAccountManagerPolicyCollection } from './sharedpcaccountmanagerpolicy.collection';
//#endregion

export class SharedPCAccountManagerPolicyModel<E extends SharedPCAccountManagerPolicy> extends ODataModel<E> {
  //#region ODataApi Properties
  accountDeletionPolicy: SharedPCAccountDeletionPolicyType;
  cacheAccountsAboveDiskFreePercentage?: number;
  inactiveThresholdDays?: number;
  removeAccountsBelowDiskFreePercentage?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}