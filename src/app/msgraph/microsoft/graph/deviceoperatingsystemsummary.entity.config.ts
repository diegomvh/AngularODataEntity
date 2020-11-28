import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.entity';
import { DeviceOperatingSystemSummaryModel } from './deviceoperatingsystemsummary.model';
import { DeviceOperatingSystemSummaryCollection } from './deviceoperatingsystemsummary.collection';
//#endregion

export const DeviceOperatingSystemSummaryConfig = {
  name: "deviceOperatingSystemSummary",
  model: DeviceOperatingSystemSummaryModel,
  collection: DeviceOperatingSystemSummaryCollection,
  annotations: [],
  fields: {
    androidCount: {type: 'Edm.Int32', nullable: false},
    iosCount: {type: 'Edm.Int32', nullable: false},
    macOSCount: {type: 'Edm.Int32', nullable: false},
    unknownCount: {type: 'Edm.Int32', nullable: false},
    windowsCount: {type: 'Edm.Int32', nullable: false},
    windowsMobileCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceOperatingSystemSummary>;