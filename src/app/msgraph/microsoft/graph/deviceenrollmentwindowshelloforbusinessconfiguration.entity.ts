import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
import { Enablement } from './enablement.enum';
//#endregion

export interface DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  pinMinimumLength: number;
  pinMaximumLength: number;
  pinUppercaseCharactersUsage: WindowsHelloForBusinessPinUsage;
  pinLowercaseCharactersUsage: WindowsHelloForBusinessPinUsage;
  pinSpecialCharactersUsage: WindowsHelloForBusinessPinUsage;
  state: Enablement;
  securityDeviceRequired: boolean;
  unlockWithBiometricsEnabled: boolean;
  remotePassportEnabled: boolean;
  pinPreviousBlockCount: number;
  pinExpirationInDays: number;
  enhancedBiometricsState: Enablement;
  //#endregion
}