import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
import { DeviceCompliancePolicyDeviceStateSummaryModel } from './devicecompliancepolicydevicestatesummary.model';
//#endregion

export class DeviceCompliancePolicyDeviceStateSummaryCollection<E extends DeviceCompliancePolicyDeviceStateSummary, M extends DeviceCompliancePolicyDeviceStateSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}