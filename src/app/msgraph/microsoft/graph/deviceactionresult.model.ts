import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ActionState } from './actionstate.enum';
import { DeviceActionResult } from './deviceactionresult.complex';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
//#endregion

export class DeviceActionResultModel<E extends DeviceActionResult> extends ODataModel<E> {
  //#region ODataApi Properties
  actionName?: string;
  actionState: ActionState;
  lastUpdatedDateTime: Date;
  startDateTime: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}