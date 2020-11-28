import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedMobileLobAppCollection } from './managedmobilelobapp.collection';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.complex';
import { ManagedAndroidLobApp } from './managedandroidlobapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { ManagedAndroidLobAppModel } from './managedandroidlobapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export class ManagedAndroidLobAppCollection<E extends ManagedAndroidLobApp, M extends ManagedAndroidLobAppModel<E>> extends ManagedMobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}