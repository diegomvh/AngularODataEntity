import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppConfigurationModel } from './managedappconfiguration.model';
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { TargetedManagedAppConfigurationCollection } from './targetedmanagedappconfiguration.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export class TargetedManagedAppConfigurationModel<E extends TargetedManagedAppConfiguration> extends ManagedAppConfigurationModel<E> {
  //#region ODataApi Properties
  deployedAppCount: number;
  isAssigned: boolean;
  apps?: ManagedMobileAppCollection<ManagedMobileApp, ManagedMobileAppModel<ManagedMobileApp>>;
  assignments?: TargetedManagedAppPolicyAssignmentCollection<TargetedManagedAppPolicyAssignment, TargetedManagedAppPolicyAssignmentModel<TargetedManagedAppPolicyAssignment>>;
  deploymentSummary?: ManagedAppPolicyDeploymentSummaryModel<ManagedAppPolicyDeploymentSummary>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: TargetedManagedAppPolicyAssignment[], options?: HttpOptions): Observable<any> {
    var res = this._action<{assignments: TargetedManagedAppPolicyAssignment[]}, any>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'property', options) as Observable<any>;
  }
  public targetApps(apps: ManagedMobileApp[], options?: HttpOptions): Observable<any> {
    var res = this._action<{apps: ManagedMobileApp[]}, any>('microsoft.graph.targetApps');
    res.segment.entitySet('');
    return res.call({apps}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}