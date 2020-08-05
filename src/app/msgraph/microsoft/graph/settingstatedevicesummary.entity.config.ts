import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
//#endregion

export const SettingStateDeviceSummaryConfig = {
  name: "SettingStateDeviceSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    settingName: {type: 'Edm.String'},
    instancePath: {type: 'Edm.String'},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<SettingStateDeviceSummary>;