import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.entity';
//#endregion

export const DeviceExchangeAccessStateSummaryConfig = {
  name: "DeviceExchangeAccessStateSummary",
  annotations: [],
  fields: {
    allowedDeviceCount: {type: 'Edm.Int32', nullable: false},
    blockedDeviceCount: {type: 'Edm.Int32', nullable: false},
    quarantinedDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    unavailableDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceExchangeAccessStateSummary>;