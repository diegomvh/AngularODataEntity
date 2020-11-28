import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ManagedAppOperation } from './managedappoperation.entity';
import { ManagedAppOperationCollection } from './managedappoperation.collection';
//#endregion

export class ManagedAppOperationModel<E extends ManagedAppOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  lastModifiedDateTime: Date;
  state?: string;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}