import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
//#endregion

export const DeviceCompliancePolicyDeviceStateSummaryConfig = {
  name: "DeviceCompliancePolicyDeviceStateSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    inGracePeriodCount: {type: 'Edm.Int32', nullable: false},
    configManagerCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceCompliancePolicyDeviceStateSummary>;