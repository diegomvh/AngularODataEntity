import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
import { DeviceEnrollmentPlatformRestrictionModel } from './deviceenrollmentplatformrestriction.model';
//#endregion

export class DeviceEnrollmentPlatformRestrictionCollection<E extends DeviceEnrollmentPlatformRestriction, M extends DeviceEnrollmentPlatformRestrictionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}