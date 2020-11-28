import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
import { DeviceComplianceDeviceOverviewModel } from './devicecompliancedeviceoverview.model';
//#endregion

export class DeviceComplianceDeviceOverviewCollection<E extends DeviceComplianceDeviceOverview, M extends DeviceComplianceDeviceOverviewModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}