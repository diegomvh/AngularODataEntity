import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ResourceOperation } from './resourceoperation.entity';
import { ResourceOperationCollection } from './resourceoperation.collection';
//#endregion

export class ResourceOperationModel<E extends ResourceOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  actionName?: string;
  description?: string;
  resourceName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}