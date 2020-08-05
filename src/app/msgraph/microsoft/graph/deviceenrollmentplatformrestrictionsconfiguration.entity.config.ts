import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestrictionsConfiguration } from './deviceenrollmentplatformrestrictionsconfiguration.entity';
//#endregion

export const DeviceEnrollmentPlatformRestrictionsConfigurationConfig = {
  name: "deviceEnrollmentPlatformRestrictionsConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  annotations: [],
  fields: {
    iosRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsMobileRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    androidRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    macOSRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'}
  }
} as EntityConfig<DeviceEnrollmentPlatformRestrictionsConfiguration>;