import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
import { IosStoreApp } from './iosstoreapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { IosStoreAppCollection } from './iosstoreapp.collection';
//#endregion

export class IosStoreAppModel<E extends IosStoreApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceTypeModel<IosDeviceType>;
  appStoreUrl?: string;
  bundleId?: string;
  minimumSupportedOperatingSystem?: IosMinimumOperatingSystemModel<IosMinimumOperatingSystem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}