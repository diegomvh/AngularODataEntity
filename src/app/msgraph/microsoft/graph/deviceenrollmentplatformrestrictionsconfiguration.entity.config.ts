import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestrictionsConfiguration } from './deviceenrollmentplatformrestrictionsconfiguration.entity';
import { DeviceEnrollmentPlatformRestrictionsConfigurationModel } from './deviceenrollmentplatformrestrictionsconfiguration.model';
import { DeviceEnrollmentPlatformRestrictionsConfigurationCollection } from './deviceenrollmentplatformrestrictionsconfiguration.collection';
//#endregion

export const DeviceEnrollmentPlatformRestrictionsConfigurationConfig = {
  name: "deviceEnrollmentPlatformRestrictionsConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  model: DeviceEnrollmentPlatformRestrictionsConfigurationModel,
  collection: DeviceEnrollmentPlatformRestrictionsConfigurationCollection,
  annotations: [],
  fields: {
    androidRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    iosRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    macOSRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsMobileRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'},
    windowsRestriction: {type: 'graph.deviceEnrollmentPlatformRestriction'}
  }
} as StructuredTypeConfig<DeviceEnrollmentPlatformRestrictionsConfiguration>;