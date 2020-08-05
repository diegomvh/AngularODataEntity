import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentLimitConfiguration } from './deviceenrollmentlimitconfiguration.entity';
//#endregion

export const DeviceEnrollmentLimitConfigurationConfig = {
  name: "deviceEnrollmentLimitConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  annotations: [],
  fields: {
    limit: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<DeviceEnrollmentLimitConfiguration>;