import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceManagementPartner extends Entity {
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
}