import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppCollection } from './managedapp.collection';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { ManagedAndroidStoreApp } from './managedandroidstoreapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { ManagedAndroidStoreAppModel } from './managedandroidstoreapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export class ManagedAndroidStoreAppCollection<E extends ManagedAndroidStoreApp, M extends ManagedAndroidStoreAppModel<E>> extends ManagedAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}