import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatusCollection } from './manageddevicemobileappconfigurationdevicestatus.collection';
//#endregion

export class ManagedDeviceMobileAppConfigurationDeviceStatusModel<E extends ManagedDeviceMobileAppConfigurationDeviceStatus> extends EntityModel<E> {
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