import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.entity';
import { WindowsDefenderScanActionResultModel } from './windowsdefenderscanactionresult.model';
//#endregion

export class WindowsDefenderScanActionResultCollection<E extends WindowsDefenderScanActionResult, M extends WindowsDefenderScanActionResultModel<E>> extends DeviceActionResultCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}