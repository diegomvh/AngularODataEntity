import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { ManagedAppPolicyDeploymentSummaryPerAppCollection } from './managedapppolicydeploymentsummaryperapp.collection';
//#endregion

export class ManagedAppPolicyDeploymentSummaryPerAppModel<E extends ManagedAppPolicyDeploymentSummaryPerApp> extends ODataModel<E> {
  //#region ODataApi Properties
  configurationAppliedUserCount: number;
  mobileAppIdentifier?: MobileAppIdentifierModel<MobileAppIdentifier>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}