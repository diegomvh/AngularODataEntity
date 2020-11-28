import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { ManagedAppAvailability } from './managedappavailability.enum';
import { ManagedApp } from './managedapp.entity';
import { ManagedAppCollection } from './managedapp.collection';
//#endregion

export class ManagedAppModel<E extends ManagedApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  appAvailability: ManagedAppAvailability;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}