import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
//#endregion

export const DeviceManagementPartnerConfig = {
  name: "DeviceManagementPartner",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.deviceManagementPartnerTenantState', nullable: false},
    partnerAppType: {type: 'graph.deviceManagementPartnerAppType', nullable: false},
    singleTenantAppId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    isConfigured: {type: 'Edm.Boolean', nullable: false},
    whenPartnerDevicesWillBeRemovedDateTime: {type: 'Edm.DateTimeOffset'},
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<DeviceManagementPartner>;