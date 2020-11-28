import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppModel } from './managedapp.model';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { ManagedAndroidStoreApp } from './managedandroidstoreapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { ManagedAndroidStoreAppCollection } from './managedandroidstoreapp.collection';
//#endregion

export class ManagedAndroidStoreAppModel<E extends ManagedAndroidStoreApp> extends ManagedAppModel<E> {
  //#region ODataApi Properties
  appStoreUrl: string;
  minimumSupportedOperatingSystem: AndroidMinimumOperatingSystemModel<AndroidMinimumOperatingSystem>;
  packageId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}