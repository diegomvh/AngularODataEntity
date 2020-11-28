import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentLimitConfiguration } from './deviceenrollmentlimitconfiguration.entity';
import { DeviceEnrollmentLimitConfigurationCollection } from './deviceenrollmentlimitconfiguration.collection';
//#endregion

export class DeviceEnrollmentLimitConfigurationModel<E extends DeviceEnrollmentLimitConfiguration> extends DeviceEnrollmentConfigurationModel<E> {
  //#region ODataApi Properties
  limit: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}