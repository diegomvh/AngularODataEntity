import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceHealthAttestationState } from './devicehealthattestationstate.complex';
import { DeviceHealthAttestationStateModel } from './devicehealthattestationstate.model';
//#endregion

export class DeviceHealthAttestationStateCollection<E extends DeviceHealthAttestationState, M extends DeviceHealthAttestationStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}