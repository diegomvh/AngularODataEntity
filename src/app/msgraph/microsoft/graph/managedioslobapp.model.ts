import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedMobileLobAppModel } from './managedmobilelobapp.model';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { ManagedIOSLobApp } from './managedioslobapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { ManagedIOSLobAppCollection } from './managedioslobapp.collection';
//#endregion

export class ManagedIOSLobAppModel<E extends ManagedIOSLobApp> extends ManagedMobileLobAppModel<E> {
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