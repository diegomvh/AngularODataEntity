import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export class AndroidMinimumOperatingSystemModel<E extends AndroidMinimumOperatingSystem> extends ODataModel<E> {
  //#region ODataApi Properties
  v4_0: boolean;
  v4_0_3: boolean;
  v4_1: boolean;
  v4_2: boolean;
  v4_3: boolean;
  v4_4: boolean;
  v5_0: boolean;
  v5_1: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}