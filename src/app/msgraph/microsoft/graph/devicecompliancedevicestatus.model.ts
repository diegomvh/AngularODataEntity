import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceComplianceDeviceStatusCollection } from './devicecompliancedevicestatus.collection';
//#endregion

export class DeviceComplianceDeviceStatusModel<E extends DeviceComplianceDeviceStatus> extends EntityModel<E> {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceDisplayName?: string;
  deviceModel?: string;
  lastReportedDateTime: Date;
  status: ComplianceStatus;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}