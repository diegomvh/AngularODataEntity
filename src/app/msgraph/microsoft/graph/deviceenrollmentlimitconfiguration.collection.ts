import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
import { DeviceEnrollmentLimitConfiguration } from './deviceenrollmentlimitconfiguration.entity';
import { DeviceEnrollmentLimitConfigurationModel } from './deviceenrollmentlimitconfiguration.model';
//#endregion

export class DeviceEnrollmentLimitConfigurationCollection<E extends DeviceEnrollmentLimitConfiguration, M extends DeviceEnrollmentLimitConfigurationModel<E>> extends DeviceEnrollmentConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}