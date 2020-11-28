import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { TargetedManagedAppProtectionCollection } from './targetedmanagedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export interface AndroidManagedAppProtection extends TargetedManagedAppProtection {
  //#region ODataApi Properties
  customBrowserDisplayName?: string;
  customBrowserPackageId?: string;
  deployedAppCount: number;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  encryptAppData: boolean;
  minimumRequiredPatchVersion?: string;
  minimumWarningPatchVersion?: string;
  screenCaptureBlocked: boolean;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}