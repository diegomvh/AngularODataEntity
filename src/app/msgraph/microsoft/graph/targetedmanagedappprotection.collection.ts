import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export class TargetedManagedAppProtectionCollection<E extends TargetedManagedAppProtection, M extends TargetedManagedAppProtectionModel<E>> extends ManagedAppProtectionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}