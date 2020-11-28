import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
import { DeviceEnrollmentPlatformRestrictionCollection } from './deviceenrollmentplatformrestriction.collection';
//#endregion

export class DeviceEnrollmentPlatformRestrictionModel<E extends DeviceEnrollmentPlatformRestriction> extends ODataModel<E> {
  //#region ODataApi Properties
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  personalDeviceEnrollmentBlocked: boolean;
  platformBlocked: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}