import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { TargetedManagedAppProtectionCollection } from './targetedmanagedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export interface IosManagedAppProtection extends TargetedManagedAppProtection {
  //#region ODataApi Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  customBrowserProtocol?: string;
  deployedAppCount: number;
  faceIdBlocked: boolean;
  minimumRequiredSdkVersion?: string;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}