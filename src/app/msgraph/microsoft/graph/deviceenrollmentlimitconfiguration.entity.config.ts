import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentLimitConfiguration } from './deviceenrollmentlimitconfiguration.entity';
import { DeviceEnrollmentLimitConfigurationModel } from './deviceenrollmentlimitconfiguration.model';
import { DeviceEnrollmentLimitConfigurationCollection } from './deviceenrollmentlimitconfiguration.collection';
//#endregion

export const DeviceEnrollmentLimitConfigurationConfig = {
  name: "deviceEnrollmentLimitConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  model: DeviceEnrollmentLimitConfigurationModel,
  collection: DeviceEnrollmentLimitConfigurationCollection,
  annotations: [],
  fields: {
    limit: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<DeviceEnrollmentLimitConfiguration>;