import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppModel } from './mobilelobapp.model';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { IosLobApp } from './ioslobapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { IosLobAppCollection } from './ioslobapp.collection';
//#endregion

export class IosLobAppModel<E extends IosLobApp> extends MobileLobAppModel<E> {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceTypeModel<IosDeviceType>;
  buildNumber?: string;
  bundleId?: string;
  expirationDateTime?: Date;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystemModel<IosMinimumOperatingSystem>;
  versionNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}