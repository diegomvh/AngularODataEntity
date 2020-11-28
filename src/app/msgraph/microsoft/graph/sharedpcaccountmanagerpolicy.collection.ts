import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SharedPCAccountDeletionPolicyType } from './sharedpcaccountdeletionpolicytype.enum';
import { SharedPCAccountManagerPolicy } from './sharedpcaccountmanagerpolicy.complex';
import { SharedPCAccountManagerPolicyModel } from './sharedpcaccountmanagerpolicy.model';
//#endregion

export class SharedPCAccountManagerPolicyCollection<E extends SharedPCAccountManagerPolicy, M extends SharedPCAccountManagerPolicyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}