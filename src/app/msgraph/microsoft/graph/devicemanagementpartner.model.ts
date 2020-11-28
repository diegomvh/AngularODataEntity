import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
import { DeviceManagementPartnerCollection } from './devicemanagementpartner.collection';
//#endregion

export class DeviceManagementPartnerModel<E extends DeviceManagementPartner> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  isConfigured: boolean;
  lastHeartbeatDateTime: Date;
  partnerAppType: DeviceManagementPartnerAppType;
  partnerState: DeviceManagementPartnerTenantState;
  singleTenantAppId?: string;
  whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date;
  whenPartnerDevicesWillBeRemovedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}