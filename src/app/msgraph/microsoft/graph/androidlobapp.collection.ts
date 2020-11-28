import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppCollection } from './mobilelobapp.collection';
import { AndroidMinimumOperatingSystem } from './androidminimumoperatingsystem.entity';
import { AndroidLobApp } from './androidlobapp.entity';
import { AndroidMinimumOperatingSystemModel } from './androidminimumoperatingsystem.model';
import { AndroidLobAppModel } from './androidlobapp.model';
import { AndroidMinimumOperatingSystemCollection } from './androidminimumoperatingsystem.collection';
//#endregion

export class AndroidLobAppCollection<E extends AndroidLobApp, M extends AndroidLobAppModel<E>> extends MobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}