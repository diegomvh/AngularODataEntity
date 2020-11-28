import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { ManagedAndroidLobApp } from './managedandroidlobapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { ManagedAndroidLobAppCollection } from './managedandroidlobapp.collection';
//#endregion

export class ManagedAndroidLobAppModel<E extends ManagedAndroidLobApp> extends ManagedMobileLobAppModel<E> {
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