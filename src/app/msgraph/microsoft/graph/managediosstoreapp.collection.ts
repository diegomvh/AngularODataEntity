import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppCollection } from './managedapp.collection';
import { IosDeviceType } from './iosdevicetype.complex';
import { IosMinimumOperatingSystem } from './iosminimumoperatingsystem.complex';
import { ManagedIOSStoreApp } from './managediosstoreapp.entity';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosMinimumOperatingSystemModel } from './iosminimumoperatingsystem.model';
import { ManagedIOSStoreAppModel } from './managediosstoreapp.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
import { IosMinimumOperatingSystemCollection } from './iosminimumoperatingsystem.collection';
//#endregion

export class ManagedIOSStoreAppCollection<E extends ManagedIOSStoreApp, M extends ManagedIOSStoreAppModel<E>> extends ManagedAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}