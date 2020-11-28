import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { ManagedDeviceMobileAppConfigurationUserSummaryModel } from './manageddevicemobileappconfigurationusersummary.model';
//#endregion

export class ManagedDeviceMobileAppConfigurationUserSummaryCollection<E extends ManagedDeviceMobileAppConfigurationUserSummary, M extends ManagedDeviceMobileAppConfigurationUserSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}