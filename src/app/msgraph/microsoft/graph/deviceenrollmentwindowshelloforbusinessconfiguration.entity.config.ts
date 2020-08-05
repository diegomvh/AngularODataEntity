import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentWindowsHelloForBusinessConfiguration } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity';
//#endregion

export const DeviceEnrollmentWindowsHelloForBusinessConfigurationConfig = {
  name: "DeviceEnrollmentWindowsHelloForBusinessConfiguration",
  base: "microsoft.graph.deviceEnrollmentConfiguration",
  annotations: [],
  fields: {
    pinMinimumLength: {type: 'Edm.Int32', nullable: false},
    pinMaximumLength: {type: 'Edm.Int32', nullable: false},
    pinUppercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinLowercaseCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    pinSpecialCharactersUsage: {type: 'graph.windowsHelloForBusinessPinUsage', nullable: false},
    state: {type: 'graph.enablement', nullable: false},
    securityDeviceRequired: {type: 'Edm.Boolean', nullable: false},
    unlockWithBiometricsEnabled: {type: 'Edm.Boolean', nullable: false},
    remotePassportEnabled: {type: 'Edm.Boolean', nullable: false},
    pinPreviousBlockCount: {type: 'Edm.Int32', nullable: false},
    pinExpirationInDays: {type: 'Edm.Int32', nullable: false},
    enhancedBiometricsState: {type: 'graph.enablement', nullable: false}
  }
} as EntityConfig<DeviceEnrollmentWindowsHelloForBusinessConfiguration>;