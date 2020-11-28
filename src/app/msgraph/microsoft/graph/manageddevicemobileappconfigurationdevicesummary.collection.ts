import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryModel } from './manageddevicemobileappconfigurationdevicesummary.model';
//#endregion

export class ManagedDeviceMobileAppConfigurationDeviceSummaryCollection<E extends ManagedDeviceMobileAppConfigurationDeviceSummary, M extends ManagedDeviceMobileAppConfigurationDeviceSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}