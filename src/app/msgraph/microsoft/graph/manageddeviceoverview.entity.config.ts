import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
//#endregion

export const ManagedDeviceOverviewConfig = {
  name: "managedDeviceOverview",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    enrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    mdmEnrolledCount: {type: 'Edm.Int32', nullable: false},
    dualEnrolledDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceOperatingSystemSummary: {type: 'graph.deviceOperatingSystemSummary'},
    deviceExchangeAccessStateSummary: {type: 'graph.deviceExchangeAccessStateSummary'}
  }
} as EntityConfig<ManagedDeviceOverview>;