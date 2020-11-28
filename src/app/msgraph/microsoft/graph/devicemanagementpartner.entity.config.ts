import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementPartner } from './devicemanagementpartner.entity';
import { DeviceManagementPartnerModel } from './devicemanagementpartner.model';
import { DeviceManagementPartnerCollection } from './devicemanagementpartner.collection';
//#endregion

export const DeviceManagementPartnerConfig = {
  name: "deviceManagementPartner",
  base: "microsoft.graph.entity",
  model: DeviceManagementPartnerModel,
  collection: DeviceManagementPartnerCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    isConfigured: {type: 'Edm.Boolean', nullable: false},
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerAppType: {type: 'graph.deviceManagementPartnerAppType', nullable: false},
    partnerState: {type: 'graph.deviceManagementPartnerTenantState', nullable: false},
    singleTenantAppId: {type: 'Edm.String'},
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: {type: 'Edm.DateTimeOffset'},
    whenPartnerDevicesWillBeRemovedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<DeviceManagementPartner>;