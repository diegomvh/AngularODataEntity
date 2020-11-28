import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PermissionScope } from './permissionscope.entity';
import { PermissionScopeModel } from './permissionscope.model';
//#endregion

export class PermissionScopeCollection<E extends PermissionScope, M extends PermissionScopeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}