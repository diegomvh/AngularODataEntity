import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentWindowsHelloForBusinessConfiguration } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationModel } from './deviceenrollmentwindowshelloforbusinessconfiguration.model';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationCollection } from './deviceenrollmentwindowshelloforbusinessconfiguration.collection';
//#endregion

export const DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig = {
  name: "deviceEnrollmentWindowsHelloForBusinessConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  model: DeviceEnrollmentWindowsHelloForBusinessConfigurationModel,
  collection: DeviceEnrollmentWindowsHelloForBusinessConfigurationCollection,
  annotations: [],
  fields: {
    enhancedBiometricsState: {type: 'graph.enablement', nullable: false},
    pinExpirationInDays: {type: 'Edm.Int32', nullable: false},
    pinLowercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinMaximumLength: {type: 'Edm.Int32', nullable: false},
    pinMinimumLength: {type: 'Edm.Int32', nullable: false},
    pinPreviousBlockCount: {type: 'Edm.Int32', nullable: false},
    pinSpecialCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinUppercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    remotePassportEnabled: {type: 'Edm.Boolean', nullable: false},
    securityDeviceRequired: {type: 'Edm.Boolean', nullable: false},
    state: {type: 'graph.enablement', nullable: false},
    unlockWithBiometricsEnabled: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<DeviceEnrollmentWindowsHelloForBusinessConfiguration>;