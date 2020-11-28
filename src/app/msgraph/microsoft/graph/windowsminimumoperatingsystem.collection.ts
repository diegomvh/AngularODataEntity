import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.complex';
import { WindowsMinimumOperatingSystemModel } from './windowsminimumoperatingsystem.model';
//#endregion

export class WindowsMinimumOperatingSystemCollection<E extends WindowsMinimumOperatingSystem, M extends WindowsMinimumOperatingSystemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}