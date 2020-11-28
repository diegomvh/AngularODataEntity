import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultModel } from './deviceactionresult.model';
import { RemoteLockActionResult } from './remotelockactionresult.entity';
import { RemoteLockActionResultCollection } from './remotelockactionresult.collection';
//#endregion

export class RemoteLockActionResultModel<E extends RemoteLockActionResult> extends DeviceActionResultModel<E> {
  //#region ODataApi Properties
  unlockPin?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}