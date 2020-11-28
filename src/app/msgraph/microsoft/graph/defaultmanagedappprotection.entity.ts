import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppProtection } from './managedappprotection.entity';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { KeyValuePair } from './keyvaluepair.complex';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export interface DefaultManagedAppProtection extends ManagedAppProtection {
  //#region ODataApi Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  customSettings: KeyValuePair[];
  deployedAppCount: number;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  encryptAppData: boolean;
  faceIdBlocked: boolean;
  minimumRequiredPatchVersion?: string;
  minimumRequiredSdkVersion?: string;
  minimumWarningPatchVersion?: string;
  screenCaptureBlocked: boolean;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}