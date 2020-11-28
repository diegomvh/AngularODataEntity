import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppModel } from './managedapp.model';
import { IosDeviceType } from './iosdevicetype.entity';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.entity';
import { ManagedIOSStoreApp } from './managediosstoreapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
import { ManagedIOSStoreAppCollection } from './managediosstoreapp.collection';
//#endregion

export class ManagedIOSStoreAppModel<E extends ManagedIOSStoreApp> extends ManagedAppModel<E> {
  //#region ODataApi Properties
  applicableDeviceType: IosDeviceTypeModel<IosDeviceType>;
  appStoreUrl: string;
  bundleId?: string;
  minimumSupportedOperatingSystem: IosMinimumOperatingSystemModel<IosMinimumOperatingSystem>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}