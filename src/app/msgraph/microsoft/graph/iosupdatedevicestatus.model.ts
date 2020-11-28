import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
import { IosUpdateDeviceStatus } from './iosupdatedevicestatus.entity';
import { IosUpdateDeviceStatusCollection } from './iosupdatedevicestatus.collection';
//#endregion

export class IosUpdateDeviceStatusModel<E extends IosUpdateDeviceStatus> extends EntityModel<E> {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceDisplayName?: string;
  deviceId?: string;
  deviceModel?: string;
  installStatus: IosUpdatesInstallStatus;
  lastReportedDateTime: Date;
  osVersion?: string;
  status: ComplianceStatus;
  userId?: string;
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