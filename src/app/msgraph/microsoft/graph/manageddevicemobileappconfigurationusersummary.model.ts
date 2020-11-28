import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { ManagedDeviceMobileAppConfigurationUserSummaryCollection } from './manageddevicemobileappconfigurationusersummary.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationUserSummaryModel<E extends ManagedDeviceMobileAppConfigurationUserSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  configurationVersion: number;
  errorCount: number;
  failedCount: number;
  lastUpdateDateTime: Date;
  notApplicableCount: number;
  pendingCount: number;
  successCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}