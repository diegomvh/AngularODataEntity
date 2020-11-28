import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { AndroidStoreApp } from './androidstoreapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
import { AndroidStoreAppCollection } from './androidstoreapp.collection';
//#endregion

export class AndroidStoreAppModel<E extends AndroidStoreApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  appStoreUrl?: string;
  minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystemModel<AndroidMinimumOperatingSystem>;
  packageId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}