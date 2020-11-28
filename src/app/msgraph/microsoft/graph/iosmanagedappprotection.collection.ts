import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TargetedManagedAppProtectionCollection } from './targetedmanagedappprotection.collection';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { IosManagedAppProtectionModel } from './iosmanagedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class IosManagedAppProtectionCollection<E extends IosManagedAppProtection, M extends IosManagedAppProtectionModel<E>> extends TargetedManagedAppProtectionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}