import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppModel } from './mobilelobapp.model';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { AndroidLobApp } from './androidlobapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { AndroidLobAppCollection } from './androidlobapp.collection';
//#endregion

export class AndroidLobAppModel<E extends AndroidLobApp> extends MobileLobAppModel<E> {
  //#region ODataApi Properties
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystemModel<AndroidMinimumOperatingSystem>;
  packageId?: string;
  versionCode?: string;
  versionName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}