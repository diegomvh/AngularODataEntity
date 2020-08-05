import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.entity';
//#endregion

export const DeviceOperatingSystemSummaryConfig = {
  name: "deviceOperatingSystemSummary",
  annotations: [],
  fields: {
    androidCount: {type: 'Edm.Int32', nullable: false},
    iosCount: {type: 'Edm.Int32', nullable: false},
    macOSCount: {type: 'Edm.Int32', nullable: false},
    windowsMobileCount: {type: 'Edm.Int32', nullable: false},
    windowsCount: {type: 'Edm.Int32', nullable: false},
    unknownCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceOperatingSystemSummary>;