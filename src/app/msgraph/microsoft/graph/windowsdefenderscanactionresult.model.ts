import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultModel } from './deviceactionresult.model';
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.entity';
import { WindowsDefenderScanActionResultCollection } from './windowsdefenderscanactionresult.collection';
//#endregion

export class WindowsDefenderScanActionResultModel<E extends WindowsDefenderScanActionResult> extends DeviceActionResultModel<E> {
  //#region ODataApi Properties
  scanType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}