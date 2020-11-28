import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.complex';
import { DeviceEnrollmentPlatformRestrictionsConfiguration } from './deviceenrollmentplatformrestrictionsconfiguration.entity';
import { DeviceEnrollmentPlatformRestrictionModel } from './deviceenrollmentplatformrestriction.model';
import { DeviceEnrollmentPlatformRestrictionCollection } from './deviceenrollmentplatformrestriction.collection';
import { DeviceEnrollmentPlatformRestrictionsConfigurationCollection } from './deviceenrollmentplatformrestrictionsconfiguration.collection';
//#endregion

export class DeviceEnrollmentPlatformRestrictionsConfigurationModel<E extends DeviceEnrollmentPlatformRestrictionsConfiguration> extends DeviceEnrollmentConfigurationModel<E> {
  //#region ODataApi Properties
  androidRestriction?: DeviceEnrollmentPlatformRestrictionModel<DeviceEnrollmentPlatformRestriction>;
  iosRestriction?: DeviceEnrollmentPlatformRestrictionModel<DeviceEnrollmentPlatformRestriction>;
  macOSRestriction?: DeviceEnrollmentPlatformRestrictionModel<DeviceEnrollmentPlatformRestriction>;
  windowsMobileRestriction?: DeviceEnrollmentPlatformRestrictionModel<DeviceEnrollmentPlatformRestriction>;
  windowsRestriction?: DeviceEnrollmentPlatformRestrictionModel<DeviceEnrollmentPlatformRestriction>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}