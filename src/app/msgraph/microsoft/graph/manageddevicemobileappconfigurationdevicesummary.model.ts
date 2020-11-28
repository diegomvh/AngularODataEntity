import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryCollection } from './manageddevicemobileappconfigurationdevicesummary.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationDeviceSummaryModel<E extends ManagedDeviceMobileAppConfigurationDeviceSummary> extends EntityModel<E> {
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