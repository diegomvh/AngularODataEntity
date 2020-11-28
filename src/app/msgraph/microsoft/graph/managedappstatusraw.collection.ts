import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppStatusCollection } from './managedappstatus.collection';
import { Json } from './json.complex';
import { ManagedAppStatusRaw } from './managedappstatusraw.entity';
import { JsonModel } from './json.model';
import { ManagedAppStatusRawModel } from './managedappstatusraw.model';
import { JsonCollection } from './json.collection';
//#endregion

export class ManagedAppStatusRawCollection<E extends ManagedAppStatusRaw, M extends ManagedAppStatusRawModel<E>> extends ManagedAppStatusCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}