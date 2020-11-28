import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
import { DeviceEnrollmentPlatformRestrictionsConfiguration } from './deviceenrollmentplatformrestrictionsconfiguration.entity';
import { DeviceEnrollmentPlatformRestrictionModel } from './deviceenrollmentplatformrestriction.model';
import { DeviceEnrollmentPlatformRestrictionsConfigurationModel } from './deviceenrollmentplatformrestrictionsconfiguration.model';
import { DeviceEnrollmentPlatformRestrictionCollection } from './deviceenrollmentplatformrestriction.collection';
//#endregion

export class DeviceEnrollmentPlatformRestrictionsConfigurationCollection<E extends DeviceEnrollmentPlatformRestrictionsConfiguration, M extends DeviceEnrollmentPlatformRestrictionsConfigurationModel<E>> extends DeviceEnrollmentConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}