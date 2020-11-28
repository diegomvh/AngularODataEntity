import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultModel } from './deviceactionresult.model';
import { ResetPasscodeActionResult } from './resetpasscodeactionresult.entity';
import { ResetPasscodeActionResultCollection } from './resetpasscodeactionresult.collection';
//#endregion

export class ResetPasscodeActionResultModel<E extends ResetPasscodeActionResult> extends DeviceActionResultModel<E> {
  //#region ODataApi Properties
  passcode?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}