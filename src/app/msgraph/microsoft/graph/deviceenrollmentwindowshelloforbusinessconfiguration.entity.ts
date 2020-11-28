import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { Enablement } from './enablement.enum';
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
//#endregion

export interface DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  enhancedBiometricsState: Enablement;
  pinExpirationInDays: number;
  pinLowercaseCharactersUsage: WindowsHelloForBusinessPinUsage;
  pinMaximumLength: number;
  pinMinimumLength: number;
  pinPreviousBlockCount: number;
  pinSpecialCharactersUsage: WindowsHelloForBusinessPinUsage;
  pinUppercaseCharactersUsage: WindowsHelloForBusinessPinUsage;
  remotePassportEnabled: boolean;
  securityDeviceRequired: boolean;
  state: Enablement;
  unlockWithBiometricsEnabled: boolean;
  //#endregion
}