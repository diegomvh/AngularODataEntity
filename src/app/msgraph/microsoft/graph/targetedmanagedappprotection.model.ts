import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { TargetedManagedAppProtectionCollection } from './targetedmanagedappprotection.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export class TargetedManagedAppProtectionModel<E extends TargetedManagedAppProtection> extends ManagedAppProtectionModel<E> {
  //#region ODataApi Properties
  isAssigned: boolean;
  assignments?: TargetedManagedAppPolicyAssignmentCollection<TargetedManagedAppPolicyAssignment, TargetedManagedAppPolicyAssignmentModel<TargetedManagedAppPolicyAssignment>>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: TargetedManagedAppPolicyAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{assignments: TargetedManagedAppPolicyAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}