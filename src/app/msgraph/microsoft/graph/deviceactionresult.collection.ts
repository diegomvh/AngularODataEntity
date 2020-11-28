import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ActionState } from './actionstate.enum';
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceActionResultModel } from './deviceactionresult.model';
//#endregion

export class DeviceActionResultCollection<E extends DeviceActionResult, M extends DeviceActionResultModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}