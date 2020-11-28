import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { ResetPasscodeActionResult } from './resetpasscodeactionresult.complex';
import { ResetPasscodeActionResultModel } from './resetpasscodeactionresult.model';
//#endregion

export class ResetPasscodeActionResultCollection<E extends ResetPasscodeActionResult, M extends ResetPasscodeActionResultModel<E>> extends DeviceActionResultCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}