import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ManagedAppOperation } from './managedappoperation.entity';
import { ManagedAppOperationModel } from './managedappoperation.model';
//#endregion

export class ManagedAppOperationCollection<E extends ManagedAppOperation, M extends ManagedAppOperationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}