import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
import { DeviceExchangeAccessStateSummaryModel } from './deviceexchangeaccessstatesummary.model';
import { DeviceExchangeAccessStateSummaryCollection } from './deviceexchangeaccessstatesummary.collection';
//#endregion

export const DeviceExchangeAccessStateSummaryConfig = {
  name: "deviceExchangeAccessStateSummary",
  model: DeviceExchangeAccessStateSummaryModel,
  collection: DeviceExchangeAccessStateSummaryCollection,
  annotations: [],
  fields: {
    allowedDeviceCount: {type: 'Edm.Int32', nullable: false},
    blockedDeviceCount: {type: 'Edm.Int32', nullable: false},
    quarantinedDeviceCount: {type: 'Edm.Int32', nullable: false},
    unavailableDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceExchangeAccessStateSummary>;