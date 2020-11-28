import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export interface TargetedManagedAppProtection extends ManagedAppProtection {
  //#region ODataApi Properties
  isAssigned: boolean;
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}