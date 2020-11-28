import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyDeviceStateSummary } from './devicecompliancepolicydevicestatesummary.entity';
import { DeviceCompliancePolicyDeviceStateSummaryModel } from './devicecompliancepolicydevicestatesummary.model';
import { DeviceCompliancePolicyDeviceStateSummaryCollection } from './devicecompliancepolicydevicestatesummary.collection';
//#endregion

export const DeviceCompliancePolicyDeviceStateSummaryConfig = {
  name: "deviceCompliancePolicyDeviceStateSummary",
  base: "microsoft.graph.entity",
  model: DeviceCompliancePolicyDeviceStateSummaryModel,
  collection: DeviceCompliancePolicyDeviceStateSummaryCollection,
  annotations: [],
  fields: {
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    configManagerCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    inGracePeriodCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceCompliancePolicyDeviceStateSummary>;