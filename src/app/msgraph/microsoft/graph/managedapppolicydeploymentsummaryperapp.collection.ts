import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.complex';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { ManagedAppPolicyDeploymentSummaryPerAppModel } from './managedapppolicydeploymentsummaryperapp.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export class ManagedAppPolicyDeploymentSummaryPerAppCollection<E extends ManagedAppPolicyDeploymentSummaryPerApp, M extends ManagedAppPolicyDeploymentSummaryPerAppModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}