import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
//#endregion

export interface TargetedManagedAppProtection extends ManagedAppProtection {
  //#region ODataApi Properties
  isAssigned: boolean;
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}