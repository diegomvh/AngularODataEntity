import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceUserStatusCollection } from './devicecomplianceuserstatus.collection';
//#endregion

export class DeviceComplianceUserStatusModel<E extends DeviceComplianceUserStatus> extends EntityModel<E> {
  //#region ODataApi Properties
  devicesCount: number;
  lastReportedDateTime: Date;
  status: ComplianceStatus;
  userDisplayName?: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}