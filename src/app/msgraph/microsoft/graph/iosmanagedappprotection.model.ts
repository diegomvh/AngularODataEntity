import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { IosManagedAppProtectionCollection } from './iosmanagedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class IosManagedAppProtectionModel<E extends IosManagedAppProtection> extends TargetedManagedAppProtectionModel<E> {
  //#region ODataApi Properties
  appDataEncryptionType: ManagedAppDataEncryptionType;
  customBrowserProtocol?: string;
  deployedAppCount: number;
  faceIdBlocked: boolean;
  minimumRequiredSdkVersion?: string;
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