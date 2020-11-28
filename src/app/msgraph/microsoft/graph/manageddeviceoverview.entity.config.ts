import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
import { ManagedDeviceOverviewModel } from './manageddeviceoverview.model';
import { ManagedDeviceOverviewCollection } from './manageddeviceoverview.collection';
//#endregion

export const ManagedDeviceOverviewConfig = {
  name: "managedDeviceOverview",
  base: "microsoft.graph.entity",
  model: ManagedDeviceOverviewModel,
  collection: ManagedDeviceOverviewCollection,
  annotations: [],
  fields: {
    deviceExchangeAccessStateSummary: {type: 'graph.deviceExchangeAccessStateSummary'},
    deviceOperatingSystemSummary: {type: 'graph.deviceOperatingSystemSummary'},
    dualEnrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    enrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    mdmEnrolledCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<ManagedDeviceOverview>;