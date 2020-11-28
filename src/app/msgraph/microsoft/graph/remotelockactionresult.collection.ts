import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { RemoteLockActionResult } from './remotelockactionresult.entity';
import { RemoteLockActionResultModel } from './remotelockactionresult.model';
//#endregion

export class RemoteLockActionResultCollection<E extends RemoteLockActionResult, M extends RemoteLockActionResultModel<E>> extends DeviceActionResultCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}