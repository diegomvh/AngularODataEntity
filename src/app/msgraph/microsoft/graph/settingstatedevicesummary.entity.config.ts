import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
//#endregion

export const SettingStateDeviceSummaryConfig = {
  name: "settingStateDeviceSummary",
  base: "microsoft.graph.entity",
  model: SettingStateDeviceSummaryModel,
  collection: SettingStateDeviceSummaryCollection,
  annotations: [],
  fields: {
    compliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    conflictDeviceCount: {type: 'Edm.Int32', nullable: false},
    errorDeviceCount: {type: 'Edm.Int32', nullable: false},
    instancePath: {type: 'Edm.String'},
    nonCompliantDeviceCount: {type: 'Edm.Int32', nullable: false},
    notApplicableDeviceCount: {type: 'Edm.Int32', nullable: false},
    remediatedDeviceCount: {type: 'Edm.Int32', nullable: false},
    settingName: {type: 'Edm.String'},
    unknownDeviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<SettingStateDeviceSummary>;