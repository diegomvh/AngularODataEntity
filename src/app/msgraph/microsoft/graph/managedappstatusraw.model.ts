import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppStatusModel } from './managedappstatus.model';
import { Json } from './json.entity';
import { ManagedAppStatusRaw } from './managedappstatusraw.entity';
import { JsonModel } from './json.model';
import { JsonCollection } from './json.collection';
import { ManagedAppStatusRawCollection } from './managedappstatusraw.collection';
//#endregion

export class ManagedAppStatusRawModel<E extends ManagedAppStatusRaw> extends ManagedAppStatusModel<E> {
  //#region ODataApi Properties
  content?: JsonModel<Json>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}