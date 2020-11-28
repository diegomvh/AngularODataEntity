import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.complex';
import { WindowsMinimumOperatingSystemCollection } from './windowsminimumoperatingsystem.collection';
//#endregion

export class WindowsMinimumOperatingSystemModel<E extends WindowsMinimumOperatingSystem> extends ODataModel<E> {
  //#region ODataApi Properties
  v10_0: boolean;
  v8_0: boolean;
  v8_1: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}