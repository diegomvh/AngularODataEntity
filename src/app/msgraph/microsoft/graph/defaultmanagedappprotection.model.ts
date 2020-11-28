import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { KeyValuePair } from './keyvaluepair.entity';
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
import { DefaultManagedAppProtectionCollection } from './defaultmanagedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class DefaultManagedAppProtectionModel<E extends DefaultManagedAppProtection> extends ManagedAppProtectionModel<E> {
  //#region ODataApi Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  customSettings: KeyValuePairCollection<KeyValuePair, KeyValuePairModel<KeyValuePair>>;
  deployedAppCount: number;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  encryptAppData: boolean;
  faceIdBlocked: boolean;
  minimumRequiredPatchVersion?: string;
  minimumRequiredSdkVersion?: string;
  minimumWarningPatchVersion?: string;
  screenCaptureBlocked: boolean;
  apps?: ManagedMobileAppCollection<ManagedMobileApp, ManagedMobileAppModel<ManagedMobileApp>>;
  deploymentSummary?: ManagedAppPolicyDeploymentSummaryModel<ManagedAppPolicyDeploymentSummary>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}