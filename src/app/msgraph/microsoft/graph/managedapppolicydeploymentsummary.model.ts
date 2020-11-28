import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { ManagedAppPolicyDeploymentSummaryPerAppModel } from './managedapppolicydeploymentsummaryperapp.model';
import { ManagedAppPolicyDeploymentSummaryPerAppCollection } from './managedapppolicydeploymentsummaryperapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export class ManagedAppPolicyDeploymentSummaryModel<E extends ManagedAppPolicyDeploymentSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  configurationDeployedUserCount: number;
  configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerAppCollection<ManagedAppPolicyDeploymentSummaryPerApp, ManagedAppPolicyDeploymentSummaryPerAppModel<ManagedAppPolicyDeploymentSummaryPerApp>>;
  displayName?: string;
  lastRefreshTime: Date;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}