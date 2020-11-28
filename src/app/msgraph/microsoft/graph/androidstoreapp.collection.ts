import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { AndroidStoreApp } from './androidstoreapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidStoreAppModel } from './androidstoreapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export class AndroidStoreAppCollection<E extends AndroidStoreApp, M extends AndroidStoreAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}