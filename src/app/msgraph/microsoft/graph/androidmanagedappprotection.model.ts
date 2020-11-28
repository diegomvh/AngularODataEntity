import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { AndroidManagedAppProtectionCollection } from './androidmanagedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class AndroidManagedAppProtectionModel<E extends AndroidManagedAppProtection> extends TargetedManagedAppProtectionModel<E> {
  //#region ODataApi Properties
  customBrowserDisplayName?: string;
  customBrowserPackageId?: string;
  deployedAppCount: number;
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean;
  encryptAppData: boolean;
  minimumRequiredPatchVersion?: string;
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