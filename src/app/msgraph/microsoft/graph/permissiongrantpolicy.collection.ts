import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseCollection } from './policybase.collection';
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PermissionGrantPolicy } from './permissiongrantpolicy.entity';
import { PermissionGrantConditionSetModel } from './permissiongrantconditionset.model';
import { PermissionGrantPolicyModel } from './permissiongrantpolicy.model';
import { PermissionGrantConditionSetCollection } from './permissiongrantconditionset.collection';
//#endregion

export class PermissionGrantPolicyCollection<E extends PermissionGrantPolicy, M extends PermissionGrantPolicyModel<E>> extends PolicyBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}