import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { ManagedAppPolicyDeploymentSummaryPerAppModel } from './managedapppolicydeploymentsummaryperapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { ManagedAppPolicyDeploymentSummaryPerAppCollection } from './managedapppolicydeploymentsummaryperapp.collection';
//#endregion

export class ManagedAppPolicyDeploymentSummaryCollection<E extends ManagedAppPolicyDeploymentSummary, M extends ManagedAppPolicyDeploymentSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}