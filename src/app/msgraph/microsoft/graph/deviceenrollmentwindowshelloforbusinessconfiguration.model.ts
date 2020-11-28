import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { Enablement } from './enablement.enum';
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
import { DeviceEnrollmentWindowsHelloForBusinessConfiguration } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationCollection } from './deviceenrollmentwindowshelloforbusinessconfiguration.collection';
//#endregion

export class DeviceEnrollmentWindowsHelloForBusinessConfigurationModel<E extends DeviceEnrollmentWindowsHelloForBusinessConfiguration> extends DeviceEnrollmentConfigurationModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}