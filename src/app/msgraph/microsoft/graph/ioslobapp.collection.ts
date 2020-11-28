import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppCollection } from './mobilelobapp.collection';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosLobApp } from './ioslobapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosLobAppModel } from './ioslobapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
//#endregion

export class IosLobAppCollection<E extends IosLobApp, M extends IosLobAppModel<E>> extends MobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}