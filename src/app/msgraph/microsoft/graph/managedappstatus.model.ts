import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppStatus } from './managedappstatus.entity';
import { ManagedAppStatusCollection } from './managedappstatus.collection';
//#endregion

export class ManagedAppStatusModel<E extends ManagedAppStatus> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}