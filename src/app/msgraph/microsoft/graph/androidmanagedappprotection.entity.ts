import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface AndroidManagedAppProtection extends TargetedManagedAppProtection {
  //#region ODataApi Properties
  screenCaptureBlocked: boolean;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  encryptAppData: boolean;
  deployedAppCount: number;
  minimumRequiredPatchVersion?: string;
  minimumWarningPatchVersion?: string;
  customBrowserPackageId?: string;
  customBrowserDisplayName?: string;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}