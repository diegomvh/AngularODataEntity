import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourcePermission } from './resourcepermission.complex';
import { ResourcePermissionModel } from './resourcepermission.model';
//#endregion

export class ResourcePermissionCollection<E extends ResourcePermission, M extends ResourcePermissionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}