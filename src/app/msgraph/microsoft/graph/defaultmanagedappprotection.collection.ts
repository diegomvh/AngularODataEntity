import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
import { KeyValuePair } from './keyvaluepair.complex';
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { DefaultManagedAppProtectionModel } from './defaultmanagedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class DefaultManagedAppProtectionCollection<E extends DefaultManagedAppProtection, M extends DefaultManagedAppProtectionModel<E>> extends ManagedAppProtectionCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}