import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PolicyBaseModel } from './policybase.model';
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PermissionGrantPolicy } from './permissiongrantpolicy.entity';
import { PermissionGrantConditionSetModel } from './permissiongrantconditionset.model';
import { PermissionGrantConditionSetCollection } from './permissiongrantconditionset.collection';
import { PermissionGrantPolicyCollection } from './permissiongrantpolicy.collection';
//#endregion

export class PermissionGrantPolicyModel<E extends PermissionGrantPolicy> extends PolicyBaseModel<E> {
  //#region ODataApi Properties
  excludes?: PermissionGrantConditionSetCollection<PermissionGrantConditionSet, PermissionGrantConditionSetModel<PermissionGrantConditionSet>>;
  includes?: PermissionGrantConditionSetCollection<PermissionGrantConditionSet, PermissionGrantConditionSetModel<PermissionGrantConditionSet>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}