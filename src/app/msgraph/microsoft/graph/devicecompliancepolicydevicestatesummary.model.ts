import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
import { DeviceCompliancePolicyDeviceStateSummaryCollection } from './devicecompliancepolicydevicestatesummary.collection';
//#endregion

export class DeviceCompliancePolicyDeviceStateSummaryModel<E extends DeviceCompliancePolicyDeviceStateSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  configManagerCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  inGracePeriodCount: number;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}