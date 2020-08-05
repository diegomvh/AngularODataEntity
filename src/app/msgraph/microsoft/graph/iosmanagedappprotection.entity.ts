import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface IosManagedAppProtection extends TargetedManagedAppProtection {
  //#region ODataApi Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  minimumRequiredSdkVersion?: string;
  deployedAppCount: number;
  faceIdBlocked: boolean;
  customBrowserProtocol?: string;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}