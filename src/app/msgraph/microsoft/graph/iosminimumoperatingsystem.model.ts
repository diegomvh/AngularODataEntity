import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
//#endregion

export class IosMinimumOperatingSystemModel<E extends IosMinimumOperatingSystem> extends ODataModel<E> {
  //#region ODataApi Properties
  v10_0: boolean;
  v11_0: boolean;
  v12_0: boolean;
  v13_0: boolean;
  v8_0: boolean;
  v9_0: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}